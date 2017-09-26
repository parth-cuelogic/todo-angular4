import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent
    ],
    imports: [
        RouterModule.forChild([
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
        ])
    ],
})
export class PagesModule { }
