import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Comment } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-request-final-revision',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './request-final-revision.component.html',
  styleUrl: './request-final-revision.component.css'
})
export class RequestFinalRevisionComponent {
 // Method to handle file input
 onFileChange(event: any) {
  const file = event.target.files[0];
  if (file) {
    // Handle the file as needed (e.g., upload it, store it, etc.)
    console.log('Selected file:', file.name);
  }
}
}
