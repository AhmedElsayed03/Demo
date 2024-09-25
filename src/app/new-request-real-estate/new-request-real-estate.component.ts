import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-request-real-estate',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './new-request-real-estate.component.html',
  styleUrl: './new-request-real-estate.component.css',
})
export class NewRequestRealEstateComponent {
 // Define arrays with proper types, allowing null for single file uploads
 singleFileArrays: (File | null)[] = [null, null, null, null];

 // Multiple file arrays, initialized as empty arrays
 multipleFileArrays: File[][] = [[], []];

 // Single File Selection
 onSingleFileSelected(event: any, index: number) {
   const file: File = event.target.files[0];
   if (file && this.isValidFile(file)) {
     this.singleFileArrays[index] = file;
   }
 }

 // Remove Single File
 removeSingleFile(index: number) {
   this.singleFileArrays[index] = null;
 }

 // Multiple File Selection
 onMultipleFilesSelected(event: any, index: number) {
   const files: FileList = event.target.files;
   const selectedFiles = Array.from(files).filter(file => this.isValidFile(file));
   this.multipleFileArrays[index].push(...selectedFiles);
 }

 // Remove Multiple File
 removeMultipleFile(file: File, index: number) {
   this.multipleFileArrays[index] = this.multipleFileArrays[index].filter(f => f !== file);
 }

 // Trigger input programmatically
 triggerFileInput(inputId: string) {
   const fileInput = document.getElementById(inputId) as HTMLInputElement;
   fileInput.click();
 }

 // File validation
 // File validation
isValidFile(file: File): boolean {
  const allowedExtensions = ['pdf', 'png', 'jpeg', 'jpg'];
  const fileSizeLimit = 5 * 1024 * 1024; // 5 MB
  const fileExtension = file.name.split('.').pop()?.toLowerCase(); // Use optional chaining

  // Check if the file extension is valid and if the file size is within the limit
  return !!fileExtension && allowedExtensions.includes(fileExtension) && file.size <= fileSizeLimit;
 }
}
