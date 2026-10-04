import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBiography } from './user-biography';

describe('UserBiography', () => {
  let component: UserBiography;
  let fixture: ComponentFixture<UserBiography>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBiography],
    }).compileComponents();

    fixture = TestBed.createComponent(UserBiography);
    fixture.componentRef.setInput('fullName', 'Ada Lovelace');
    fixture.componentRef.setInput('email', 'ada@example.com');
    fixture.componentRef.setInput('address', {
      street: { number: 1, name: 'Main Street' },
      city: 'Indianapolis',
      state: 'Indiana',
      country: 'United States',
      postcode: '46204',
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
