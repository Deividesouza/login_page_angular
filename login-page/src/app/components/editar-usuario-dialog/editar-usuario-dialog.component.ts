import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../pages/crud/crud.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-usuario-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './editar-usuario-dialog.component.html',
  styleUrls: ['./editar-usuario-dialog.component.scss']
})
export class EditarUsuarioDialogComponent {
  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<EditarUsuarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public usuario: Usuario
  ) {
    this.form = this.fb.group({
      ip: [usuario.ip, Validators.required],
      macaddress: [usuario.macaddress, Validators.required],
      hostname: [usuario.hostname, Validators.required],
      nomecompleto: [usuario.nomecompleto, Validators.required],
      posto_grade: [usuario.posto_grade, Validators.required],
      cpf: [usuario.cpf, Validators.required],
      lna: [usuario.lna, Validators.required]
    });
  }

  salvar() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  cancelar() {
    this.dialogRef.close(null);
  }
}
