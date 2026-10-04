import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

// Describes the address fields from the API that this app displays.
export interface ApiAddress {
  // Random User separates a street address into its house number and street name.
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number | string;
}

// Describes one user record from the API. We include only the fields this profile needs.
export interface ApiUser {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  location: ApiAddress;
}

// Random User wraps its list of users inside a property named "results".
interface ApiUserResponse {
  results: ApiUser[];
}

// Makes one shared service available anywhere in the application.
@Injectable({ providedIn: 'root' })
export class UserProfileService {
  // HttpClient is Angular's built-in tool for making HTTP requests.
  private http = inject(HttpClient);

  getUser() {
    // Ask the API for one user. The seed keeps the returned user consistent while developing.
    return this.http.get<ApiUserResponse>(
      'https://randomuser.me/api/1.4/?results=1&seed=profile-user-1',
    );
  }
}
