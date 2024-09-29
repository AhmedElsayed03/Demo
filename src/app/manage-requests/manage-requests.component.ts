import { CommonModule, DatePipe, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { RealEstateRequestService } from '../services/real-estate-request.service';
import { LandRequestService } from '../services/land-request.service';

@Component({
  selector: 'app-manage-requests',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass, DatePipe, CommonModule],
  templateUrl: './manage-requests.component.html',
  styleUrls: ['./manage-requests.component.css'],
})
export class ManageRequestsComponent implements OnInit {
  requests: any[] = [];
  statuses = ['تم الرفع المساحي', 'تعذر', 'مدفوع'];
  governorates = ['القاهرة', 'الإسكندرية', 'الجيزة'];
  requestTypes = ['عقار', 'شقة'];

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
    private landSer: LandRequestService
  ) {}

  ngOnInit(): void {
    this.loadRequests();
    this.applyFilters();
  }

  loadRequests() {
    const storedRealEstateRequests = localStorage.getItem('realEstateRequests');
    const storedLandRequests = localStorage.getItem('landRequests');

    const realEstateRequests = storedRealEstateRequests
      ? JSON.parse(storedRealEstateRequests)
      : [];
    const landRequests = storedLandRequests
      ? JSON.parse(storedLandRequests)
      : [];

    this.requests = [...realEstateRequests, ...landRequests]; // Combine both requests
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
      request.assignedSurveyor = this.selectedSurveyor;
    });

    this.selectedRequests = [];
    this.selectedSurveyor = '';

    const modalElement = document.getElementById('assignSurveyorModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }

    console.log('Assigned to surveyor:', this.selectedSurveyor);
  }
}
