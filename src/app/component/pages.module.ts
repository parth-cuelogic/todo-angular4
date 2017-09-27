import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ChildRoutes,ChildComponents } from './pages.route';




@NgModule({
    declarations: [
        ChildComponents
    ],
    imports: [
        ChildRoutes
    ],
})
export class PagesModule { }
