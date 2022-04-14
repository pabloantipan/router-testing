import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutPageComponent } from './rut-page.component';

describe('RutPageComponent', () => {
  let component: RutPageComponent;
  let fixture: ComponentFixture<RutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
