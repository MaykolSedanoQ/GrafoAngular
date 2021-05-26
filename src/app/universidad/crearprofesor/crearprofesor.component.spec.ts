import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearprofesorComponent } from './crearprofesor.component';

describe('CrearprofesorComponent', () => {
  let component: CrearprofesorComponent;
  let fixture: ComponentFixture<CrearprofesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearprofesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
