import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';

const rootRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'pages',
        loadChildren: './modules/pages.module#PagesModule'
    }
];

export const RootRoutes = RouterModule.forRoot(rootRoutes);

export const RootComponents = [
    LoginComponent,
    RegisterComponent
];