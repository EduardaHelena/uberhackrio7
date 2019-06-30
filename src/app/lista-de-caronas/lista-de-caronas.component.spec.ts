import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeCaronasComponent } from './lista-de-caronas.component';

describe('ListaDeCaronasComponent', () => {
  let component: ListaDeCaronasComponent;
  let fixture: ComponentFixture<ListaDeCaronasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeCaronasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeCaronasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
