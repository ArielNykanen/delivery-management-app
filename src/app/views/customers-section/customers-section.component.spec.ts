import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersSectionComponent } from './customers-section.component';

describe('CustomersSectionComponent', () => {
  let component: CustomersSectionComponent;
  let fixture: ComponentFixture<CustomersSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
