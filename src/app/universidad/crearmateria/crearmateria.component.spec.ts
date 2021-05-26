import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearmateriaComponent } from './crearmateria.component';

describe('CrearmateriaComponent', () => {
  let component: CrearmateriaComponent;
  let fixture: ComponentFixture<CrearmateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearmateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearmateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
