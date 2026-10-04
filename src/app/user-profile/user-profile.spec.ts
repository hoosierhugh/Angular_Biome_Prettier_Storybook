import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UserProfile } from './user-profile';
import { UserProfileService } from './user-profile.service';

describe('UserProfile', () => {
  let component: UserProfile;
  let fixture: ComponentFixture<UserProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfile],
      providers: [
        {
          provide: UserProfileService,
          useValue: {
            getUser: () =>
              of({
                results: [
                  {
                    name: { first: 'Ada', last: 'Lovelace' },
                    email: 'ada@example.com',
                    picture: { large: 'https://example.com/profile.jpg' },
                    location: {
                      street: { number: 1, name: 'Main Street' },
                      city: 'Indianapolis',
                      state: 'Indiana',
                      country: 'United States',
                      postcode: '46204',
                    },
                  },
                ],
              }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
