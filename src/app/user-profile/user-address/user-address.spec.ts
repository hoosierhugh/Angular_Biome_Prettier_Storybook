import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddress } from './user-address';

describe('UserAddress', () => {
  let component: UserAddress;
  let fixture: ComponentFixture<UserAddress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAddress],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAddress);
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
