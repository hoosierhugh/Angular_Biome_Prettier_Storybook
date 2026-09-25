import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBiography } from './user-biography';

describe('UserBiography', () => {
  let component: UserBiography;
  let fixture: ComponentFixture<UserBiography>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBiography]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBiography);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
