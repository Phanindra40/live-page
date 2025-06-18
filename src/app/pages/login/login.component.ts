import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms'; // Corrected import
import { CommonModule } from '@angular/common';
import { ToasterService } from '../../toaster.service';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [CommonModule, FormsModule, HeaderComponent] // Corrected import
 // Corrected import
})
export class LoginComponent {
  
  bgImage = 'BG_IMAGE_URL'; 

  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService, private toasterService: ToasterService) {}


 ngOnInit() {
  console.log("Auth status:", this.authService.isLoggedIn);
  if (this.authService.isLoggedIn) {
    this.router.navigateByUrl('/browser');
  }
 }
  onSubmit() {
    if (!this.email || !this.password) {
      this.toasterService.showError('Please enter email and password');
      return;
    }

    this.authService.login(this.email, this.password).subscribe(
      (success) => {
        if (success) {
          this.toasterService.showSuccess('Login successful');
          this.router.navigateByUrl('/browser'); // Ensure this route exists
        } else {
          alert('Login failed');
        }
      }
    );
  }
}
function Inject(AuthService: any): (target: typeof LoginComponent, propertyKey: undefined, parameterIndex: 1) => void {
  throw new Error('Function not implemented.');
}

