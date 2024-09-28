import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerUser=this.fb.group({
    fullName:["",[Validators.required]],
    userName:["",Validators.required],
    email:["",Validators.required],
    password:["",Validators.required],
    nationalId:["",Validators.required],
    phoneNumber:["",Validators.required],
    province:["",Validators.required],
  })
  constructor(private fb:FormBuilder){}
}
