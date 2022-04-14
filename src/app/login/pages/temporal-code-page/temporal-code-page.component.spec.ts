import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporalCodePageComponent } from './temporal-code-page.component';

describe('TemporalCodePageComponent', () => {
  let component: TemporalCodePageComponent;
  let fixture: ComponentFixture<TemporalCodePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporalCodePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporalCodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
