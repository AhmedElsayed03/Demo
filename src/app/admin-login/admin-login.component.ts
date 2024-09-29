import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  username = "";
  password = "";

  constructor(private router: Router, private authService: AuthService) {} // Inject AuthService

  onLogin() {
    if (this.username === 'Manager' && this.password === 'Manager') {
      this.authService.setUserRole('Manager'); // Set the role
      this.router.navigate(['/portal_dashboard']); 
    } else if (this.username === 'CSAgent' && this.password === 'CSAgent') {
      this.authService.setUserRole('CSAgent'); // Set the role
      this.router.navigate(['/portal_dashboard']); 
    } else if (this.username === 'Reviewer' && this.password === 'Reviewer') {
      this.authService.setUserRole('Reviewer'); // Set the role
      this.router.navigate(['/portal_dashboard']); 
    } else if (this.username === 'Auditor' && this.password === 'Auditor') {
      this.authService.setUserRole('Auditor'); // Set the role
      this.router.navigate(['/portal_dashboard']); 
    } else {
      alert('اسم المستخدم أو كلمة المرور غير صحيحة'); 
    }
  }
}
