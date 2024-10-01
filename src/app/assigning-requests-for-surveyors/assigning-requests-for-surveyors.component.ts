import { Component } from '@angular/core';

@Component({
  selector: 'app-assigning-requests-for-surveyors',
  standalone: true,
  imports: [],
  templateUrl: './assigning-requests-for-surveyors.component.html',
  styleUrl: './assigning-requests-for-surveyors.component.css'
})
export class AssigningRequestsForSurveyorsComponent {
  toggleState: boolean = false;
  isDistributed: boolean = false;
  showPopup: boolean = false;  

  onToggle(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.toggleState = inputElement.checked;
  }

  distribute(): void {
    this.isDistributed = true;
  }

  openPopup(): void {
    this.showPopup = true;  
  }

  closePopup(): void {
    this.showPopup = false; 
  }

  // Close the popup if clicking outside of the modal content
  closePopupOnOutsideClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {
      this.closePopup();  // Close the popup only when clicking outside of the content
    }
  }
}
