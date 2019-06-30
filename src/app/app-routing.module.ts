import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },

  ];

@NgModule({
    declarations: [],
    imports: [
      BrowserModule,
      CommonModule,
      RouterModule.forRoot(routes, {
        useHash: true
      })
    ]
  })
export class AppRoutingModule { }