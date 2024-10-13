import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-super-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css'],  // Corrected from styleUrl to styleUrls
})
export class SuperAdminComponent {
  // Static data for requests
  requests: any[] = [
    { reqNumber: 'REQ001', status: 'تم الرفع المساحي', governorate: 'القاهرة', type: 'عقار', ownerFullName: 'أحمد محمد', ssn: '123456789', date: '2023/10/01' },
    { reqNumber: 'REQ002', status: 'تعذر', governorate: 'الإسكندرية', type: 'شقة', ownerFullName: 'سارة علي', ssn: '987654321', date: '2023/09/15' },
    { reqNumber: 'REQ003', status: 'مدفوع', governorate: 'الجيزة', type: 'أرض', ownerFullName: 'علي حسن', ssn: '123123123', date: '2023/08/20' },
    { reqNumber: 'REQ004', status: 'تم الرفع المساحي', governorate: 'القاهرة', type: 'عقار', ownerFullName: 'محمد عبد الله', ssn: '321321321', date: '2023/10/05' },
    { reqNumber: 'REQ005', status: 'تعذر', governorate: 'الإسكندرية', type: 'شقة', ownerFullName: 'فاطمة أحمد', ssn: '456456456', date: '2023/09/25' },
    { reqNumber: 'REQ006', status: 'مدفوع', governorate: 'الجيزة', type: 'أرض', ownerFullName: 'حسين سعيد', ssn: '654654654', date: '2023/10/10' },
    { reqNumber: 'REQ007', status: 'تم الرفع المساحي', governorate: 'القاهرة', type: 'عقار', ownerFullName: 'رضا حسن', ssn: '789789789', date: '2023/07/15' },
    { reqNumber: 'REQ008', status: 'تعذر', governorate: 'الإسكندرية', type: 'شقة', ownerFullName: 'منى كمال', ssn: '321321321', date: '2023/08/30' },
    { reqNumber: 'REQ009', status: 'مدفوع', governorate: 'الجيزة', type: 'أرض', ownerFullName: 'سامي رشيد', ssn: '159159159', date: '2023/09/10' },
    { reqNumber: 'REQ010', status: 'تم الرفع المساحي', governorate: 'القاهرة', type: 'عقار', ownerFullName: 'ماجدة عادل', ssn: '753753753', date: '2023/10/07' },
  ];

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

  selectedRequest: any = null;
  comment: string = '';

  ngOnInit(): void {
    this.applyFilters(); // Apply filters initially
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
