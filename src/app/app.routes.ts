import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { EditRequestDataComponent } from './edit-request-data/edit-request-data.component';


export const routes: Routes = [
    {path: 'Login' , component:LoginComponent},
    {path : 'Register' , component:RegisterComponent},
    {path : 'UserRequests' , component:UserRequestsComponent},
    {path : 'EditRequest' , component: EditRequestDataComponent}
];
