import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { FormsModule } from '@angular/forms';

import { RootRoutes, RootComponents } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    RootComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RootRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
