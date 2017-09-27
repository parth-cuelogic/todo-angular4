import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

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
        loadChildren: './component/pages.module#PagesModule'
    }
];

export const RootRoutes = RouterModule.forRoot(rootRoutes);

export const RootComponents = [
    LoginComponent,
    RegisterComponent
];