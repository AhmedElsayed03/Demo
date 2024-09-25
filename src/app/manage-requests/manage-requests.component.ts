import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-manage-requests',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './manage-requests.component.html',
  styleUrl: './manage-requests.component.css',
})
export class ManageRequestsComponent implements OnInit {
  requests = [
    {
      number: '15612383',
      owner: 'أحمد خالد أيمن',
      date: '12/09/2024',
      daysSinceCreation: 5,
      status: 'تم الرفع المساحي',
      governorate: 'القاهرة',
      type: 'نوع 1',
    },
    {
      number: '15612384',
      owner:'مروة محمد سليمان',
      date: '12/09/2024',
      daysSinceCreation: 25,
      status: 'تعذر',
      governorate: 'الإسكندرية',
      type: 'نوع 2',
    },
    {
      number: '15612385',
      owner: 'أحمد خالد أيمن',
      date: '12/09/2024',
      daysSinceCreation: 25,
      status: 'تم الرفع المساحي',
      governorate: 'الجيزة',
      type: 'نوع 1',
    },
    {
      number: '15612386',
      owner: 'أحمد خالد أيمن',
      date: '12/09/2024',
      daysSinceCreation: 5,
      status: 'مدفوع',
      governorate: 'القاهرة',
      type: 'نوع 2',
    }
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

  filteredRequests = this.requests;  

  constructor() {}

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredRequests = this.requests.filter((request) => {
      return (
        (!this.statusFilter || request.status === this.statusFilter) &&
        (!this.governorateFilter || request.governorate === this.governorateFilter) &&
        (!this.typeFilter || request.type === this.typeFilter) &&
        (!this.searchTerm || request.owner.includes(this.searchTerm)) 
      );
    });
  }
}
