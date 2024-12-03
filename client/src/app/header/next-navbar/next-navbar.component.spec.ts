import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextNavbarComponent } from './next-navbar.component';

describe('NextNavbarComponent', () => {
  let component: NextNavbarComponent;
  let fixture: ComponentFixture<NextNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
