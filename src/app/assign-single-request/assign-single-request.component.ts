import { Component } from '@angular/core';

@Component({
  selector: 'app-assign-single-request',
  standalone: true,
  imports: [],
  templateUrl: './assign-single-request.component.html',
  styleUrl: './assign-single-request.component.css'
})
export class AssignSingleRequestComponent {
  toggleState: boolean = false;
  isDistributed: boolean = false;
  showPopup: boolean = false;  // Control visibility of the popup

  onToggle(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.toggleState = inputElement.checked;
  }

  distribute(): void {
    this.isDistributed = true;
  }

  openPopup(): void {
    this.showPopup = true;  // Show popup when 'تعذر' button is clicked
  }

  closePopup(): void {
    this.showPopup = false;  // Close popup when CTA or exit button is clicked
  }

  // Close the popup if clicking outside of the modal content
  closePopupOnOutsideClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {
      this.closePopup();  // Close the popup only when clicking outside of the content
    }
  }
}
