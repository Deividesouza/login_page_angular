import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarUsuariosDialogComponent } from './criar-usuarios-dialog.component';

describe('CriarUsuariosDialogComponent', () => {
  let component: CriarUsuariosDialogComponent;
  let fixture: ComponentFixture<CriarUsuariosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarUsuariosDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarUsuariosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
