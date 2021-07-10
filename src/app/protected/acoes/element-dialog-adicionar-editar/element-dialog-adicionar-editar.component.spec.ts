import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDialogAdicionarEditarComponent } from './element-dialog-adicionar-editar.component';

describe('ElementDialogAdicionarEditarComponent', () => {
  let component: ElementDialogAdicionarEditarComponent;
  let fixture: ComponentFixture<ElementDialogAdicionarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementDialogAdicionarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDialogAdicionarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
