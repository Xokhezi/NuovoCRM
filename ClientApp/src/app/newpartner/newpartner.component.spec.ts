import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpartnerComponent } from './newpartner.component';

describe('NewpartnerComponent', () => {
  let component: NewpartnerComponent;
  let fixture: ComponentFixture<NewpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
