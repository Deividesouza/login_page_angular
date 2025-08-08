import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-criar-usuarios-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './criar-usuarios-dialog.component.html',
  styleUrls: ['./criar-usuarios-dialog.component.scss']
})
export class CriarUsuariosDialogComponent {
  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<CriarUsuariosDialogComponent>
  ) {
    this.form = this.fb.group({
      ip: ['', Validators.required],
      macaddress: ['', Validators.required],
      hostname: ['', Validators.required],
      nomecompleto: ['', Validators.required],
      posto_grade: ['', Validators.required],
      cpf: ['', Validators.required],
      lna: ['', Validators.required]
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
