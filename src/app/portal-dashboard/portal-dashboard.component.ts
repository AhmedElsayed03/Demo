import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-portal-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portal-dashboard.component.html',
  styleUrl: './portal-dashboard.component.css'
})
export class PortalDashboardComponent {
  userRole: string | null;

  constructor(private router: Router, private authService: AuthService) {
    this.userRole = this.authService.getUserRole(); // Get user role from AuthService
  }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  isOptionEnabled(option: string): boolean {
    switch (this.userRole) {
      case 'Manager':
        return true; // All options enabled
      case 'CSAgent':
        return option === 'callCenter'; // Only Call Center enabled
      case 'Reviewer':
        return option === 'review'; // Only Review enabled
      case 'Auditor':
        return option === 'audit'; // Only Audit enabled
      default:
        return false; // No options enabled
    }
  }
}
