import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NewRequestRealEstateComponent } from "../new-request-real-estate/new-request-real-estate.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-request-options',
  standalone: true,
  imports: [RouterModule, NewRequestRealEstateComponent, FormsModule,] ,
  templateUrl: './new-request-options.component.html',
  styleUrl: './new-request-options.component.css'
})
export class NewRequestOptionsComponent {
 selectedUnit:string="";
constructor(private router:Router){}

  selectUnit(unit: string) {

    this.selectedUnit = unit; 
    this.router.navigate(["/new_request_real_estate"])

  }
  onUnitChange(event:any){
    this.selectedUnit = event.target.value; 
  }


}
