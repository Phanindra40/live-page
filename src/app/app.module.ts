import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './pages/service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule, // Required for Toastr
    ToastrModule.forRoot({
      timeOut: 3000, // Notification disappears after 3 seconds
      positionClass: 'toast-top-right', // Position of toast
      preventDuplicates: true, // Avoid duplicate toasts
    })
  ],
  providers: [AuthService],
  bootstrap: [] // No need to bootstrap standalone components here
})
export class AppModule { }
