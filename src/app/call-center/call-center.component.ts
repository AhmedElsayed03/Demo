import { CommonModule, DatePipe, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { RealEstateRequestService } from '../services/real-estate-request.service';
import { LandRequestService } from '../services/land-request.service';

@Component({
  selector: 'app-call-center',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass, DatePipe, CommonModule, RouterLink],
  templateUrl: './call-center.component.html',
  styleUrls: ['./call-center.component.css'], // Fixed typo here
})
export class CallCenterComponent implements OnInit {
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

  selectedDate: string = '-';
  selectedHour: number = 12;
  selectedMinute: number = 10;
  amPm: string = 'AM';

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
    // Static data for demonstration
    const sampleRequests = [
      {
        reqNumber: '1586322',
        ownerFullName: 'أحمد محمد',
        date: '2023/10/01',
        phone: '01234567890',
        governorate: 'القاهرة',
        type: 'عقار',
        status: 'تم الرفع المساحي',
        appointment: {
          date: '',
          hour: 12,
          minute: 10,
          amPm: 'AM'
        }
      },
      {
        reqNumber: '1586520',
        ownerFullName: 'سارة علي',
        date: '2023/09/15',
        phone: '09876543210',
        governorate: 'الإسكندرية',
        type: 'شقة',
        status: 'مدفوع',
        appointment: {
          date: '',
          hour: 12,
          minute: 10,
          amPm: 'AM'
        }
      },
      {
        reqNumber: '1596784',
        ownerFullName: 'محمود سمير',
        date: '2023/08/20',
        phone: '01123456789',
        governorate: 'الجيزة',
        type: 'عقار',
        status: 'تعذر',
        appointment: {
          date: '',
          hour: 12,
          minute: 10,
          amPm: 'AM'
        }
      },
      {
        reqNumber: '121514',
        ownerFullName: 'نجلاء محمود',
        date: '2023/09/25',
        phone: '01567891234',
        governorate: 'القاهرة',
        type: 'شقة',
        status: 'مدفوع',
        appointment: {
          date: '',
          hour: 12,
          minute: 10,
          amPm: 'AM'
        }
      },
      {
        reqNumber: '15863415',
        ownerFullName: 'محمد حسن',
        date: '2023/09/30',
        phone: '01654321987',
        governorate: 'الإسكندرية',
        type: 'عقار',
        status: 'تم الرفع المساحي',
        appointment: {
          date: '',
          hour: 12,
          minute: 10,
          amPm: 'AM'
        }
      }
    ];

    this.requests = sampleRequests;
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

      const fromDate = this.fromDateFilter ? new Date(this.fromDateFilter) : null;
      const toDate = this.toDateFilter ? new Date(this.toDateFilter) : null;

      return (
        (!this.statusFilter || request.status === this.statusFilter) &&
        (!this.governorateFilter || request.governorate === this.governorateFilter) &&
        (!this.typeFilter || request.type === this.typeFilter) &&
        (!this.searchTerm ||
          request.ownerFullName.includes(this.searchTerm) ||
          request.phone.includes(this.searchTerm)) && // Updated field for search
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
      const index = this.requests.findIndex((r) => r.reqNumber === request.reqNumber);
      
      if (index !== -1) {
        this.requests[index].assignedSurveyor = this.selectedSurveyor;
      }
    });

    this.selectedRequests = [];
    this.selectedSurveyor = '';
  
    const modalElement = document.getElementById('assignSurveyorModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
  
    console.log('Assigned to surveyor:', this.selectedSurveyor);
    this.applyFilters(); // Reapply filters to refresh the displayed requests
  }

  currentRequest: any = null;

  openScheduleModal(request: any) {
    this.currentRequest = request;
    this.selectedDate = request.appointment.date;
    this.selectedHour = request.appointment.hour;
    this.selectedMinute = request.appointment.minute;
    this.amPm = request.appointment.amPm;

    const modalElement = document.getElementById('scheduleModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error('Modal element not found');
    }
  }

  submitAppointment() {
    if (this.currentRequest) {
      this.currentRequest.appointment.date = this.selectedDate;
      this.currentRequest.appointment.hour = this.selectedHour;
      this.currentRequest.appointment.minute = this.selectedMinute;
      this.currentRequest.appointment.amPm = this.amPm;
    }

    console.log(`Selected Date: ${this.selectedDate}`);
    console.log(`Selected Time: ${this.selectedHour}:${this.selectedMinute} ${this.amPm}`);
  }
}
