import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LandRequestService {
  requests$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  landRequests: any[] = [];
  requesterRequests: any[] = [];

  constructor() {
    // Load existing requests from localStorage
    const storedRequests = localStorage.getItem('landRequests');
    if (storedRequests) {
      this.landRequests = JSON.parse(storedRequests);
      this.requests$.next(this.landRequests); // Initialize the BehaviorSubject with the stored requests
    }
  }

  addRequest(request: any) {
    this.landRequests.push(request);
    localStorage.setItem('landRequests', JSON.stringify(this.landRequests));
    console.log(this.landRequests);

    this.requests$.next(this.landRequests);
  }

  getAllLandRequests() {
    return this.requests$.asObservable();
  }

  getUserLandRequests(requesterName: string) {
    this.requests$.asObservable().subscribe((res: any) => {
      this.requesterRequests = res.filter(
        (ele: any) => ele.fullName === requesterName
      );
      return this.requesterRequests;
    });
  }
}
