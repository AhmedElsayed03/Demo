import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-get-request',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './get-request.component.html',
  styleUrl: './get-request.component.css'
})
export class GetRequestComponent {

  email:string ='marwaghonem299@gmail.com'
  phone:string = '01018351224'
  ssn :string ='29910141256222'
  unitOwnerNme:string='marwa mohamed ghonem'

  /*agent data  */

  agentssn:string='299526232332'
  agentPhoneNumber:string='01012515121'
  agentName:string='Ayman Mostafa'
  agentEmail:string='aymanMostafa@gmail.com'

  /* unit data */

  unitType:string='فيلا'
  unitArea:string='100'
  measurement:string='م'
  governorate:string='الدقهلية'
  city:string='المنصورة'
  unitNumber:string='10'
  unitFloors:string='2'
  address:string='شارع محمد علي'
  description:string='عمارة 10 شارع محمد علي امام البنك الاهلي'



 // Static data for single file uploads
singleFileStaticData = [
  { title: 'صوره وجه البطاقه', image: 'assets/idfront.jpg' },
  { title: 'صوره ضهر البطاقه', image: 'assets/idback2.jpg' },
  { title: 'صوره وجه البطاقه للوكيل', image: 'assets/idfront2.jpg' },
  { title: 'صوره ضهر البطاقه للوكيل', image: 'assets/idback2.jpg' }
];

// Static data for multiple file uploads
multipleFileStaticData = [
  {
    title: 'صور محل الطلب',
    images: ['assets/فيلا للبيع.jpg', 'assets/فيلا لللبيع2.jpg']
  },
  {
    title: 'صور سند الملكيه',
    images: ['assets/سند ملكية.jpg', 'assets/سند ملكية.jpg']
  },
  {
    title: 'صور التوكيل',
    images: ['assets/توكيل2.jpg', 'assets/توكيل3.jpg']
  }
];

}
