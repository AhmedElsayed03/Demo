import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  Validators,
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { UnitRequestService } from '../services/unit-request.service';

@Component({
  selector: 'app-new-request-unit',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './new-request-unit.component.html',
  styleUrl: './new-request-unit.component.css'
})
export class NewRequestUnitComponent {
 // Define arrays with proper types, allowing null for single file uploads
 singleImageArrays: string[] = [
  'ownerFrontImage',
  'ownerBackImage',
  'agentFrontImage',
  'BackImage',
];
multibleImagesArrays: string[] = [
  'requestImage',
  'propertyImage',
  'agentImage',
];

singleFileArrays: (File | null)[] = [null, null, null, null];
@Input() unitType: any = '';
// Multiple file arrays, initialized as empty arrays
multipleFileArrays: File[][] = [[], [], []];
realStateRequest = this.fb.group({
  ownerEmail: [''],
  phone: ['', Validators.required],
  ownerFullName: ['', Validators.required],
  nationalId: ['', Validators.required],
  phoneNumber: ['', Validators.required],
  agentEmail: ['', Validators.required],
  agentPhone: ['', Validators.required],
  agentFullName: ['', Validators.required],
  agentNationalId: ['', Validators.required],
  realStateType: ['', Validators.required],
  area: ['', Validators.required],
  city: ['', Validators.required],
  date: ['', Validators.required],
  governorate: ['', Validators.required],
  realStateNumber: ['', Validators.required],
  realStateFloorsNumber: ['', Validators.required],
  realStateAddress: ['', Validators.required],
  realStateDescriptions: ['', Validators.required],
  ownerFrontImage: ['', Validators.required],
  ownerBackImage: ['', Validators.required],
  agentFrontImage: ['', Validators.required],
  BackImage: ['', Validators.required],
  requestImage: [[]],
  propertyImage: [[]],
  agentImage: [[]],
  reqNumber: [''],
});
constructor(
  private fb: FormBuilder,
  private realEstateRequestSer: UnitRequestService,
  private router: Router
) {}
generateRandomTenDigitNumber() {
  const min = 1000000000; // Smallest 10-digit number
  const max = 9999999999; // Largest 10-digit number
  let reqNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  this.realStateRequest.controls['reqNumber'].setValue(reqNumber.toString());
}
ngOnInit(): void {
  this.generateRandomTenDigitNumber();
  let date = new Date();
  this.realStateRequest.controls['date'].setValue(date.toString());
  console.log(this.realStateRequest.controls['date'].value);
}

// Single File Selection
onSingleFileSelected(event: any, index: number, controlName: string) {
  const file: File = event.target.files[0]; // Get the selected file
  if (file && this.isValidFile(file)) {
    // Check if file is valid
    this.singleFileArrays[index] = file; // Store file in the appropriate array

    // Get the form control and set the file name (or other metadata) in the form control
    const control = this.realStateRequest.get(controlName);
    if (control) {
      control.setValue(file.name); // Set file name in the form control
    }
  }
}

// Remove Single File
removeSingleFile(index: number) {
  this.singleFileArrays[index] = null;
}

// Multiple File Selection
onMultipleFilesSelected(event: any, index: number) {
  const files: FileList = event.target.files;
  const selectedFiles = Array.from(files).filter((file) =>
    this.isValidFile(file)
  );
  this.multipleFileArrays[index].push(...selectedFiles);
  console.log(selectedFiles);

  const control = this.realStateRequest.get(this.multibleImagesArrays[index]);
  if (control) {
    control.setValue(this.multipleFileArrays[index]); // `file.name` is a string
  }
}

// Remove Multiple File
removeMultipleFile(file: File, index: number) {
  this.multipleFileArrays[index] = this.multipleFileArrays[index].filter(
    (f) => f !== file
  );
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
  return (
    !!fileExtension &&
    allowedExtensions.includes(fileExtension) &&
    file.size <= fileSizeLimit
  );
}
sendRequest() {
  console.log(this.realStateRequest.value);
  this.realEstateRequestSer.addRequest(this.realStateRequest.value);
  this.router.navigate(['/userRequest']);
}
}
