import type { Routes } from '@angular/router';

// App level imports
import { Home } from './home/home';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart';
import { UserProfile } from './user-profile/user-profile';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'cart', component: ShoppingCartComponent, title: 'Cart' },
  { path: 'user', component: UserProfile, title: 'User Profile' },
  { path: '**', redirectTo: '' },
];
