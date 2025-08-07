import { Component, OnInit } from '@angular/core';
import { DefaultCrudLayoutComponent } from '../../components/default-crud-layout/default-crud-layout.component';
import { CrudService } from '../../service/crud.service';
import { Usuario } from './crud.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    DefaultCrudLayoutComponent,
    CommonModule
  ],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'] // corrigido
})
export class CrudComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private readonly crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.listar().subscribe({
      next: (data: Usuario[]) => {
        console.log('Dados recebidos:', data);
        this.usuarios = data;
      },
      error: (err) => {
        console.error('Erro ao buscar usuários:', err);
      }
    });
  }
}
