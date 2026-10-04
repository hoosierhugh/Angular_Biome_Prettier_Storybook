import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-photo',
  imports: [],
  templateUrl: './profile-photo.html',
  styleUrl: './profile-photo.css',
})
export class ProfilePhoto {
  photoUrl = input.required<string>();
}
