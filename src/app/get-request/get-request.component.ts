import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RealEstateRequestService } from '../services/real-estate-request.service';
@Component({
  selector: 'app-get-request',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './get-request.component.html',
  styleUrl: './get-request.component.css'
})
export class GetRequestComponent {

//   email:string ='marwaghonem299@gmail.com'
//   phone:string = '01018351224'
//   ssn :string ='29910141256222'
//   unitOwnerNme:string='marwa mohamed ghonem'

//   /*agent data  */

//   agentssn:string='299526232332'
//   agentPhoneNumber:string='01012515121'
//   agentName:string='Ayman Mostafa'
//   agentEmail:string='aymanMostafa@gmail.com'

//   /* unit data */

//   unitType:string='فيلا'
//   unitArea:string='100'
//   measurement:string='م'
//   governorate:string='الدقهلية'
//   city:string='المنصورة'
//   unitNumber:string='10'
//   unitFloors:string='2'
//   address:string='شارع محمد علي'
//   description:string='عمارة 10 شارع محمد علي امام البنك الاهلي'



 // Static data for single file uploads


id:any
userData:any

singleFileStaticData:any[]=[] 


// Static data for multiple file uploads
multipleFileStaticData:any[] =[] ;
constructor(private activatedRoute:ActivatedRoute,private realEstateSer:RealEstateRequestService){
activatedRoute.params.subscribe(param=>{
  this.id=param["id"]
})
}
ngOnInit(): void {
  this.realEstateSer.getAllRealEstateRequests().subscribe(res=>{
    this.userData=res[this.id]
    this.singleFileStaticData=[
      { title: 'صوره وجه البطاقه', image: `./assets/${this.userData.ownerFrontImage}` },
      { title: 'صوره ضهر البطاقه', image: `./assets/${this.userData.ownerBackImage}` },
      { title: 'صوره وجه البطاقه للوكيل', image: `./assets/${this.userData.agentFrontImage}` },
      { title: 'صوره ضهر البطاقه للوكيل', image:`./assets/${this.userData.BackImage}` }
    ];
    this.multipleFileStaticData=[
      {
        title: 'صور محل الطلب',
        images: this.userData.requestImage.map((ele:File)=>`./assets/${ele.name}`)
      },
      {
        title: 'صور سند الملكيه',
        images: this.userData.propertyImage.map((ele:File)=>`./assets/${ele.name}`)
      },
      {
        title: 'صور التوكيل',
        images: this.userData.agentImage.map((ele:File)=>`./assets/${ele.name}`)
      }]
  })
}

}
