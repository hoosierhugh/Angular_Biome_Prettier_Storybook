import { Component, input } from '@angular/core';

import type { ApiAddress } from '../user-profile.service';

@Component({
  selector: 'app-user-address',
  imports: [],
  templateUrl: './user-address.html',
  styleUrl: './user-address.css',
})
export class UserAddress {
  address = input.required<ApiAddress>();
}
