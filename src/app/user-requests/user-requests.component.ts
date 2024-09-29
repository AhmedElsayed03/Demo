import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RealEstateRequestService } from '../services/real-estate-request.service';
import { LandRequestService } from '../services/land-request.service'; // Import LandRequestService
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-requests',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, DatePipe],
  templateUrl: './user-requests.component.html',
  styleUrl: './user-requests.component.css',
})
export class UserRequestsComponent {
  userRequests: any[] = []; // Rename to better reflect combined requests

  constructor(
    private realEstateSer: RealEstateRequestService,
    private landRequestSer: LandRequestService // Inject LandRequestService
  ) {}

  ngOnInit(): void {
    // Fetch real estate requests
    this.realEstateSer
      .getAllRealEstateRequests()
      .subscribe((realEstateRequests) => {
        // Fetch land requests
        this.landRequestSer.getAllLandRequests().subscribe((landRequests) => {
          // Combine both requests
          this.userRequests = [
            ...realEstateRequests.map((req) => ({
              ...req,
              type: 'Real Estate',
            })),
            ...landRequests.map((req) => ({ ...req, type: 'Land' })),
          ];
        });
      });
  }
}
