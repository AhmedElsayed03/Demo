import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewRequestRealEstateComponent } from "../new-request-real-estate/new-request-real-estate.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-request-options',
  standalone: true,
  imports: [RouterModule, NewRequestRealEstateComponent, FormsModule] ,
  templateUrl: './new-request-options.component.html',
  styleUrl: './new-request-options.component.css'
})
export class NewRequestOptionsComponent {

  selectedUnit!:string;


  selectUnit(unit: string) {
    this.selectedUnit = unit; 
  }
  onUnitChange(event:any){
    this.selectedUnit = event.target.value; 
  }


}
