import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import * as bootstrap from 'bootstrap';

interface Request {
  number: string;
  owner: string;
  date: string;
  daysSinceCreation: number;
  status: string;
  governorate: string;
  type: string;
  assignedSurveyor?: string; 
ssn:string;
}

@Component({
  selector: 'app-manage-requests',
  standalone: true,
  imports: [FormsModule, NgFor ,NgClass],
  templateUrl: './manage-requests.component.html',
  styleUrl: './manage-requests.component.css',
})
export class ManageRequestsComponent implements OnInit {
  requests : Request[]= [
    {
      number: '15612383',
      owner: 'أحمد خالد أيمن',
      date: '12/09/2024',
      daysSinceCreation: 5,
      status: 'تم الرفع المساحي',
      governorate: 'القاهرة',
      type: 'نوع 1',
      ssn:'29910141200456'
    },
    {
      number: '15612384',
      owner: 'مروة محمد سليمان',
      date: '12/09/2024',
      daysSinceCreation: 25,
      status: 'تعذر',
      governorate: 'الإسكندرية',
      type: 'نوع 2',
      ssn:'2991014120856'

    },
    {
      number: '15612385',
      owner: 'أحمد خالد أيمن',
      date: '12/09/2024',
      daysSinceCreation: 25,
      status: 'تم الرفع المساحي',
      governorate: 'الجيزة',
      type: 'نوع 1',
      ssn:'2991014125156'

    },
    {
      number: '15612386',
      owner: 'أحمد خالد أيمن',
      date: '12/09/2024',
      daysSinceCreation: 5,
      status: 'مدفوع',
      governorate: 'القاهرة',
      type: 'نوع 2',
      ssn:'29910141251556'

    },
  ];

  statuses = ['تم الرفع المساحي', 'تعذر', 'مدفوع'];
  governorates = ['القاهرة', 'الإسكندرية', 'الجيزة'];
  requestTypes = ['عقار', 'شقة'];

  // Filters
  statusFilter: string = '';
  governorateFilter: string = '';
  typeFilter: string = '';
  dateFilter: string = '';
  searchTerm: string = '';
  ssnFilter:string='';
  fromDateFilter: string = '';  
  toDateFilter: string = '';  
  filteredRequests = this.requests;

  constructor() {}

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredRequests = this.requests.filter((request) => {
      const requestDate = new Date(request.date.split('/').reverse().join('-')); // Convert DD/MM/YYYY to YYYY-MM-DD format for comparison
      
      const fromDate = this.fromDateFilter ? new Date(this.fromDateFilter) : null;
      const toDate = this.toDateFilter ? new Date(this.toDateFilter) : null;
  
      return (
        (!this.statusFilter || request.status === this.statusFilter) &&
        (!this.governorateFilter || request.governorate === this.governorateFilter) &&
        (!this.typeFilter || request.type === this.typeFilter) &&
        (!this.searchTerm || request.owner.includes(this.searchTerm) || request.ssn.includes(this.searchTerm)) &&
        // Date filter: Check if request date is within the selected range
        (!fromDate || requestDate >= fromDate) &&
        (!toDate || requestDate <= toDate)
      );
    });
  }
  

  selectedRequests: any[] = [];

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

  surveyors = ['المساح 1', 'المساح 2', 'المساح 3']; 
  selectedSurveyor: string = '';

  // ... existing methods ...

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
    this.selectedRequests.forEach(request => {
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