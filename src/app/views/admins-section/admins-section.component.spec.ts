import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsSectionComponent } from './admins-section.component';

describe('AdminsSectionComponent', () => {
  let component: AdminsSectionComponent;
  let fixture: ComponentFixture<AdminsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
