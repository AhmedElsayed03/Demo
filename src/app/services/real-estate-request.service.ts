import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealEstateRequestService {
requests$:BehaviorSubject<any[]>=new BehaviorSubject<any[]>([]);
realEstateRequests:any[]=[]
requesterRequests:any[]=[]

constructor() { }
addRequest(request:any){
this.realEstateRequests.push(request)
localStorage.setItem("realEstateRequests",JSON.stringify( this.realEstateRequests))
console.log(this.realEstateRequests);

this.requests$.next(this.realEstateRequests)
}
getAllRealEstateRequests(){
  return this.requests$.asObservable()
}
getUserRealEstateRequests(requesterName:string){
   this.requests$.asObservable().subscribe((res:any)=>{
    this.requesterRequests=res.filter((ele:any)=>ele.fullName==requesterName)
    return this.requesterRequests
  })
}
}
