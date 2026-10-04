export interface UserProfileData {
  readonly photo: ProfilePhotoData;
  readonly biography: UserBiographyData;
}

export interface ProfilePhotoData {
  readonly url: string;
  readonly altText: string;
}

export interface UserBiographyData {
  readonly fullName: string;
  readonly email: string;
  readonly phone: string;
  readonly memberSince: string;
  readonly address: UserAddressData;
}

export interface UserAddressData {
  readonly street: string;
  readonly city: string;
  readonly state: string;
  readonly country: string;
  readonly postalCode: string;
}
