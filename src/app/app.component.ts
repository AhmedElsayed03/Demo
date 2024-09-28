import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewRequestOptionsComponent } from './new-request-options/new-request-options.component';
import { NewRequestRealEstateComponent } from './new-request-real-estate/new-request-real-estate.component';
import { AssignedRequestDetailsComponent } from './assigned-request-details/assigned-request-details.component';
import { AssignSingleRequestComponent } from './assign-single-request/assign-single-request.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    RouterLink,
    CommonModule,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NewRequestOptionsComponent,
    NewRequestRealEstateComponent,
    AssignedRequestDetailsComponent,
    AssignSingleRequestComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Demo';
}
