import { Component, inject, type OnInit, signal } from '@angular/core';

// Locals
import { ProfilePhoto } from './profile-photo/profile-photo';
import { UserBiography } from './user-biography/user-biography';
import { type ApiUser, UserProfileService } from './user-profile.service';

@Component({
  selector: 'app-user-profile',
  imports: [ProfilePhoto, UserBiography],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile implements OnInit {
  private userProfileService = inject(UserProfileService);

  // Holds the user received from the API. Angular updates the template when this signal changes.
  user = signal<ApiUser | null>(null);

  ngOnInit(): void {
    this.userProfileService.getUser().subscribe((response) => {
      // The API puts its returned users in an array. This profile displays the first one.
      const firstUser = response.results[0];

      if (!firstUser) {
        // Keep the page honest: if the API returns no user, there is no profile to display.
        this.user.set(null);
        return;
      }

      // Save the API user so the template and child components can use its real data.
      this.user.set(firstUser);
    });
  }
}
