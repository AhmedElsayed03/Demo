import { CommonModule, DatePipe, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { RealEstateRequestService } from '../services/real-estate-request.service';
import { LandRequestService } from '../services/land-request.service';
@Component({
  selector: 'app-final-revision',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass, DatePipe, CommonModule ,RouterModule],
  templateUrl: './final-revision.component.html',
  styleUrl: './final-revision.component.css'
})
export class FinalRevisionComponent implements OnInit {
  requests: any[] = [];
  statuses = ['تم الرفع المساحي', 'تعذر', 'مدفوع'];
  governorates = ['القاهرة', 'الإسكندرية', 'الجيزة'];
  requestTypes = ['عقار', 'شقة' , 'أرض'];

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
      this.requests = [
        { reqNumber: 1158523, date: '2024/10/01', status: 'تم الرفع المساحي', governorate: 'القاهرة', type: 'عقار', ownerFullName: 'أحمد علي', ssn: '1234567890' },
        { reqNumber: 1126987, date: '2024/10/02', status: 'تعذر', governorate: 'الإسكندرية', type: 'شقة', ownerFullName: 'مريم محمد', ssn: '0987654321' },
        { reqNumber: 1145986, date: '2024/10/03', status: 'مدفوع', governorate: 'الجيزة', type: 'أرض', ownerFullName: 'علي أحمد', ssn: '1122334455' },
        { reqNumber: 1147895, date: '2024/10/04', status: 'تم الرفع المساحي', governorate: 'القاهرة', type: 'شقة', ownerFullName: 'سمية حسن', ssn: '2233445566' },
        { reqNumber: 1125245, date: '2024/10/05', status: 'مدفوع', governorate: 'الإسكندرية', type: 'عقار', ownerFullName: 'سعيد محمود', ssn: '3344556677' },
        { reqNumber: 1148585, date: '2024/10/06', status: 'تعذر', governorate: 'الجيزة', type: 'أرض', ownerFullName: 'فاطمة علي', ssn: '4455667788' },
        { reqNumber: 1135145, date: '2024/10/07', status: 'مدفوع', governorate: 'القاهرة', type: 'شقة', ownerFullName: 'نادية جابر', ssn: '5566778899' },
        { reqNumber: 1145697, date: '2024/10/08', status: 'تعذر', governorate: 'الإسكندرية', type: 'عقار', ownerFullName: 'حسن عبد الله', ssn: '6677889900' },
        { reqNumber: 1147566, date: '2024/10/09', status: 'تم الرفع المساحي', governorate: 'الجيزة', type: 'أرض', ownerFullName: 'ليلى كمال', ssn: '7788990011' },
        { reqNumber: 1455962, date: '2024/10/10', status: 'مدفوع', governorate: 'القاهرة', type: 'شقة', ownerFullName: 'محمود سعيد', ssn: '8899001122' }
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
    // Other properties...
    selectedRequest: any = null;
    comment: string = '';
  
    openCommentModal(request: any) {
      this.selectedRequest = request;
      this.comment = request.comment || ''; // Load existing comment if available
      
      const modalElement = document.getElementById('commentModal');
      
      // Ensure modalElement is not null
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      } else {
        console.error('Modal element not found');
      }
    }
    
    saveComment() {
      if (this.selectedRequest) {
        this.selectedRequest.comment = this.comment;
        this.updateRequest(this.selectedRequest); // Call method to update the request (in local storage or backend)
      }
    }
  
    updateRequest(request: any) {
      // Find the request and update it (either save it to local storage or call a service to save it in the backend)
      const index = this.requests.findIndex((req) => req.reqNumber === request.reqNumber);
      if (index > -1) {
        this.requests[index] = request;
        // Save to local storage or backend
        localStorage.setItem('realEstateRequests', JSON.stringify(this.requests));
      }
    }
  }
  
  
  

