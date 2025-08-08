import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-default-crud-layout',
  standalone: true,
  imports: [MatToolbarModule,MatPaginatorModule, MatFormFieldModule],
  templateUrl: './default-crud-layout.component.html',
  styleUrls: ['./default-crud-layout.component.scss']
})
export class DefaultCrudLayoutComponent { }
