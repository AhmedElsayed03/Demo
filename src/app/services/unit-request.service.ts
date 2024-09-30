import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnitRequestService {
  requests$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  UnitRequests: any[] = [];
  requesterRequests: any[] = [];

  constructor() {
    // Load existing requests from localStorage
    const storedRequests = localStorage.getItem('UnitRequests');
    if (storedRequests) {
      this.UnitRequests = JSON.parse(storedRequests);
      this.requests$.next(this.UnitRequests); // Initialize the BehaviorSubject with the stored requests
    }
  }

  addRequest(request: any) {
    this.UnitRequests.push(request);
    localStorage.setItem('UnitRequests', JSON.stringify(this.UnitRequests));
    console.log(this.UnitRequests);

    this.requests$.next(this.UnitRequests);
  }

  getAllUnitRequests() {
    return this.requests$.asObservable();
  }

  getUserUnitRequests(requesterName: string) {
    this.requests$.asObservable().subscribe((res: any) => {
      this.requesterRequests = res.filter(
        (ele: any) => ele.fullName === requesterName
      );
      return this.requesterRequests;
    });
  }
}
