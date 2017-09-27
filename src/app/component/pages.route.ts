import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';


const childRoutes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
        ]
    }
];


export const ChildRoutes = RouterModule.forChild(childRoutes);

export const ChildComponents = [
    PagesComponent,
    HomeComponent
]
