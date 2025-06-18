import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BrowserComponent } from './pages/browser/browser.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'browser', component: BrowserComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
    declarations: [],
    imports: [
      BrowserModule,
      RouterModule,
      AppComponent
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModule { }