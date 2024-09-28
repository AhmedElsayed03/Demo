import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RealEstateRequestService } from '../services/real-estate-request.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-requests',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './user-requests.component.html',
  styleUrl: './user-requests.component.css'
})
export class UserRequestsComponent {
userReqests:any[]=[]
constructor(private realEstateSer:RealEstateRequestService){}
ngOnInit(): void {
this.realEstateSer.getAllRealEstateRequests().subscribe(res=>{
this.userReqests=res
})
  
}
}
