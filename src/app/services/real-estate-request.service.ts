import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RealEstateRequestService {
  requests$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  realEstateRequests: any[] = [];
  requesterRequests: any[] = [];

  constructor() {
    // Load existing requests from localStorage
    const storedRequests = localStorage.getItem('realEstateRequests');
    if (storedRequests) {
      this.realEstateRequests = JSON.parse(storedRequests);
      this.requests$.next(this.realEstateRequests); // Initialize the BehaviorSubject with the stored requests
    }
  }

  addRequest(request: any) {
    this.realEstateRequests.push(request);
    localStorage.setItem(
      'realEstateRequests',
      JSON.stringify(this.realEstateRequests)
    );
    console.log(this.realEstateRequests);

    this.requests$.next(this.realEstateRequests);
  }

  getAllRealEstateRequests() {
    return this.requests$.asObservable();
  }

  getUserRealEstateRequests(requesterName: string) {
    this.requests$.asObservable().subscribe((res: any) => {
      this.requesterRequests = res.filter(
        (ele: any) => ele.fullName === requesterName
      );
      return this.requesterRequests;
    });
  }
}
// export class RealEstateRequestService {
//   requests$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
//   realEstateRequests: any[] = [];
//   requesterRequests: any[] = [];

//   constructor() {}
//   addRequest(request: any) {
//     this.realEstateRequests.push(request);
//     localStorage.setItem(
//       'realEstateRequests',
//       JSON.stringify(this.realEstateRequests)
//     );
//     console.log(this.realEstateRequests);

//     this.requests$.next(this.realEstateRequests);
//   }
//   getAllRealEstateRequests() {
//     return this.requests$.asObservable();
//   }
//   getUserRealEstateRequests(requesterName: string) {
//     this.requests$.asObservable().subscribe((res: any) => {
//       this.requesterRequests = res.filter(
//         (ele: any) => ele.fullName == requesterName
//       );
//       return this.requesterRequests;
//     });
//   }
// }
