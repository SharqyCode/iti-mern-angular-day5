import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Profile } from '../pages/profile/profile';
import { authGuard } from '../guards/auth-guard-guard';
import { LoginForm } from '../pages/login-form/login-form';
import { ProfileEdit } from '../pages/profile-edit/profile-edit';
import { ProfileSettings } from '../pages/profile-settings/profile-settings';

export const routes: Routes = [
    {
        path: "", redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: Home, canActivate: [authGuard],
    },
    {
        path: 'profile',
        component: Profile,
        canActivate: [authGuard],
        children: [
            {path: 'edit', component:ProfileEdit},
            {path: 'settings', component:ProfileSettings},
        ]
    },
    {
        path: 'login',
        component: LoginForm,
        title: "App | Login"
    }
];
