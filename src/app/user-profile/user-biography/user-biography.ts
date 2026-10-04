import { Component, input } from '@angular/core';

// Locals
import { UserAddress } from '../user-address/user-address';
import type { ApiAddress } from '../user-profile.service';

@Component({
  selector: 'app-user-biography',
  imports: [UserAddress],
  templateUrl: './user-biography.html',
  styleUrl: './user-biography.css',
})
export class UserBiography {
  fullName = input.required<string>();
  email = input.required<string>();
  address = input.required<ApiAddress>();
}
