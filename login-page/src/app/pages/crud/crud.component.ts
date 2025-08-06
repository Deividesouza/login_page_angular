import { Component } from '@angular/core';
import { DefaultCrudLayoutComponent } from '../../components/default-crud-layout/default-crud-layout.component';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    DefaultCrudLayoutComponent,
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {

}
