import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTaskGridComponent } from './recent-task-grid.component';

describe('RecentTaskGridComponent', () => {
  let component: RecentTaskGridComponent;
  let fixture: ComponentFixture<RecentTaskGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentTaskGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentTaskGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
