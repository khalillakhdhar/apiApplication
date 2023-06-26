import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappelDetailsComponent } from './rappel-details.component';

describe('RappelDetailsComponent', () => {
  let component: RappelDetailsComponent;
  let fixture: ComponentFixture<RappelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RappelDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RappelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
