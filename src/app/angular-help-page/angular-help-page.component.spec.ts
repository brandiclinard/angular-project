import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHelpPageComponent } from './angular-help-page.component';

describe('AngularHelpPageComponent', () => {
  let component: AngularHelpPageComponent;
  let fixture: ComponentFixture<AngularHelpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularHelpPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHelpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
