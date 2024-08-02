import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropCarUiComponent } from './europ-car-ui.component';

describe('EuropCarUiComponent', () => {
  let component: EuropCarUiComponent;
  let fixture: ComponentFixture<EuropCarUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EuropCarUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EuropCarUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
