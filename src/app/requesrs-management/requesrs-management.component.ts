import { CommonModule, DatePipe, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { RealEstateRequestService } from '../services/real-estate-request.service';
import { LandRequestService } from '../services/land-request.service';

@Component({
  selector: 'app-requesrs-management',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass, DatePipe, CommonModule, RouterModule],
  templateUrl: './requesrs-management.component.html',
  styleUrls: ['./requesrs-management.component.css']
})
export class RequesrsManagementComponent implements OnInit {
  requestId: number = 0;
  requests: any[] = [];
  statuses = ['تم الرفع المساحي', 'تعذر', 'مدفوع'];
  governorates = ['القاهرة', 'الإسكندرية', 'الجيزة'];
  requestTypes = ['عقار', 'شقة', 'أرض'];

  // Filters
  statusFilter: string = '';
  governorateFilter: string = '';
  typeFilter: string = '';
  searchTerm: string = '';
  fromDateFilter: string = '';
  toDateFilter: string = '';
  filteredRequests: any[] = [];

  selectedRequests: any[] = [];
  surveyors = ['المساح 1', 'المساح 2', 'المساح 3'];
  selectedSurveyor: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private realEstateSer: RealEstateRequestService,
    private landSer: LandRequestService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadRequests();
    this.applyFilters();
    this.router.paramMap.subscribe(params => {
      const id = params.get('id');  // 'id' is extracted from the route parameters
      // Handle the 'id' value here
    });
  }

  loadRequests() {
    // Static data for requests
    this.requests = [
      {
        reqNumber: 11202154,
        date: '2024/10/01',
        status: 'تم الرفع المساحي',
        governorate: 'القاهرة',
        type: 'عقار',
        ownerFullName: 'أحمد علي',
        ssn: '1234567890',
      },
      {
        reqNumber: 15802154,
        date: '2024/10/02',
        status: 'تعذر',
        governorate: 'الإسكندرية',
        type: 'شقة',
        ownerFullName: 'مريم محمد',
        ssn: '0987654321',
      },
      {
        reqNumber: 11205854,
        date: '2024/10/03',
        status: 'مدفوع',
        governorate: 'الجيزة',
        type: 'أرض',
        ownerFullName: 'علي أحمد',
        ssn: '1122334455',
      },
      
      {
        reqNumber: 11205854,
        date: '2024/10/04',
        status: 'مدفوع',
        governorate: 'القاهرة',
        type: 'أرض',
        ownerFullName: 'مروة محمد',
        ssn: '1122334455',
      },
      {
        reqNumber: 18521367,
        date: '2024/10/01',
        status: 'تم الرفع المساحي',
        governorate: 'القاهرة',
        type: 'عقار',
        ownerFullName: 'أحمد علي',
        ssn: '1234567890',
      },
      {
        reqNumber: 11205878,
        date: '2024/10/02',
        status: 'تعذر',
        governorate: 'الإسكندرية',
        type: 'شقة',
        ownerFullName: 'مريم محمد',
        ssn: '0987654321',
      },
      {
        reqNumber: 11578543,
        date: '2024/10/03',
        status: 'مدفوع',
        governorate: 'الجيزة',
        type: 'أرض',
        ownerFullName: 'علي أحمد',
        ssn: '1122334455',
      },
      {
        reqNumber: 11485626,
        date: '2024/10/04',
        status: 'تم الرفع المساحي',
        governorate: 'القاهرة',
        type: 'شقة',
        ownerFullName: 'سمية حسن',
        ssn: '2233445566',
      },
      {
        reqNumber: 11202752,
        date: '2024/10/05',
        status: 'مدفوع',
        governorate: 'الإسكندرية',
        type: 'عقار',
        ownerFullName: 'سعيد محمود',
        ssn: '3344556677',
      },
      {
        reqNumber:1158975 ,
        date: '2024/10/06',
        status: 'تعذر',
        governorate: 'الجيزة',
        type: 'أرض',
        ownerFullName: 'فاطمة علي',
        ssn: '4455667788',
      },
      // Add more static data as needed
    ];
  }

  numberOfDays(pastDate: any): number {
    if (typeof pastDate === 'string' || typeof pastDate === 'number') {
      pastDate = new Date(pastDate);
    }

    if (isNaN(pastDate.getTime())) {
      console.error('Invalid date:', pastDate);
      return 0;
    }

    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - pastDate.getTime();
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  }

  applyFilters() {
    this.filteredRequests = this.requests.filter((request) => {
      const requestDate = new Date(request.date.split('/').reverse().join('-'));

      const fromDate = this.fromDateFilter
        ? new Date(this.fromDateFilter)
        : null;
      const toDate = this.toDateFilter ? new Date(this.toDateFilter) : null;

      return (
        (!this.statusFilter || request.status === this.statusFilter) &&
        (!this.governorateFilter ||
          request.governorate === this.governorateFilter) &&
        (!this.typeFilter || request.type === this.typeFilter) &&
        (!this.searchTerm ||
          request.ownerFullName.includes(this.searchTerm) ||
          request.ssn.includes(this.searchTerm)) &&
        (!fromDate || requestDate >= fromDate) &&
        (!toDate || requestDate <= toDate)
      );
    });
  }

  toggleSelection(request: any) {
    const index = this.selectedRequests.indexOf(request);
    if (index > -1) {
      this.selectedRequests.splice(index, 1);
    } else {
      this.selectedRequests.push(request);
    }
  }

  isSelected(request: any): boolean {
    return this.selectedRequests.includes(request);
  }

  toggleSelectAll(event: any) {
    if (event.target.checked) {
      this.selectedRequests = [...this.filteredRequests];
    } else {
      this.selectedRequests = [];
    }
  }

  openAssignSurveyorModal() {
    const modalElement = document.getElementById('assignSurveyorModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error('Modal element not found');
    }
  }

  selectSurveyor(surveyor: string): void {
    this.selectedSurveyor = surveyor;
  }

  assignSurveyor() {
    this.selectedRequests.forEach((request) => {
      // Find the index of the request in the original requests array
      const index = this.requests.findIndex((r) => r.reqNumber === request.reqNumber);
      
      // If the request exists in the original array, update it
      if (index !== -1) {
        this.requests[index].assignedSurveyor = this.selectedSurveyor; // Update assigned surveyor
      }
    });
  
    // Clear selections and close modal
    this.selectedRequests = [];
    this.selectedSurveyor = '';
  
    const modalElement = document.getElementById('assignSurveyorModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
  
    console.log('Assigned to surveyor:', this.selectedSurveyor);
  
    // Reapply filters to refresh the displayed requests
    this.applyFilters();
  }
}
