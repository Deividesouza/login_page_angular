import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCrudLayoutComponent } from './default-crud-layout.component';

describe('DefaultCrudLayoutComponent', () => {
  let component: DefaultCrudLayoutComponent;
  let fixture: ComponentFixture<DefaultCrudLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultCrudLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultCrudLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
