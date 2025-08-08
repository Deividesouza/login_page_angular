import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DefaultCrudLayoutComponent } from '../../components/default-crud-layout/default-crud-layout.component';
import { CrudService } from '../../service/crud.service';
import { Usuario } from './crud.model';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import { EditarUsuarioDialogComponent } from '../../components/editar-usuario-dialog/editar-usuario-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CriarUsuariosDialogComponent } from '../../components/criar-usuarios-dialog/criar-usuarios-dialog.component';
@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    DefaultCrudLayoutComponent,
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,

  ],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['ip', 'macaddress', 'hostname', 'nomecompleto', 'posto_grade', 'cpf', 'lna', 'acoes'];
  dataSource = new MatTableDataSource<Usuario>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private readonly crudService: CrudService,
    private readonly http: HttpClient,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.criarFiltroPersonalizado();
    this.carregarUsuarios();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageSize = 10; // Define o tamanho da página
  }

  criarFiltroPersonalizado() {
    this.dataSource.filterPredicate = (data: Usuario, filter: string) => {
      const dataStr = `${data.ip} ${data.macaddress} ${data.hostname} ${data.nomecompleto} ${data.posto_grade} ${data.cpf} ${data.lna}`.toLowerCase();
      return dataStr.includes(filter);
    };
  }

  aplicarFiltro(event: Event): void {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage(); // Voltar para a primeira página após filtrar
    }
  }

  carregarUsuarios(): void {
    this.crudService.listar().subscribe({
      next: (data: Usuario[]) => {
        this.dataSource.data = data;
        console.log('Usuários carregados:', data);
      },
      error: (err) => {
        console.error('Erro ao buscar usuários:', err);
      }
    });
  }

  abrirCadastro() {
    const dialogRef = this.dialog.open(CriarUsuariosDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((result: Usuario | null) => {
      if (result) {
        this.crudService.criar(result).subscribe({
          next: (usuarioCriado) => {
            this.dataSource.data = [...this.dataSource.data, usuarioCriado];
            this.dataSource._updateChangeSubscription();
          },
          error: (err) => {
            console.error('Erro ao criar usuário:', err);
          }
        });
      }
    });
  }


  excluirUsuario(id: number) {
    this.http.delete(`http://localhost:8080/api/usuarios/${id}`).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(u => u.ip !== id);
    });
  }

  editarUsuario(usuario: Usuario) {
    const dialogRef = this.dialog.open(EditarUsuarioDialogComponent, {
      width: '400px',
      data: usuario
    });

    dialogRef.afterClosed().subscribe((result: Usuario | null) => {
      if (result) {
        this.crudService.atualizar(usuario.ip, result).subscribe({
          next: (usuarioAtualizado) => {
            const index = this.dataSource.data.findIndex(u => u.ip === usuarioAtualizado.ip);
            if (index !== -1) {
              this.dataSource.data[index] = usuarioAtualizado;
              this.dataSource._updateChangeSubscription();
            }
          },
          error: (err) => {
            console.error('Erro ao atualizar usuário:', err);
          }
        });
      }
    });
  }
}

