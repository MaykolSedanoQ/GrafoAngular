import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafosComponent } from './grafos.component';

describe('GrafosComponent', () => {
  let component: GrafosComponent;
  let fixture: ComponentFixture<GrafosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
