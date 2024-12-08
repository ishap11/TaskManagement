import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApperanaceComponent } from './apperanace.component';

describe('ApperanaceComponent', () => {
  let component: ApperanaceComponent;
  let fixture: ComponentFixture<ApperanaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApperanaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApperanaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
