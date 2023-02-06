import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePartnerComponent } from './single-partner.component';

describe('SinglePartnerComponent', () => {
  let component: SinglePartnerComponent;
  let fixture: ComponentFixture<SinglePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
