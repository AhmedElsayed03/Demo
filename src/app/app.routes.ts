import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NewRequestOptionsComponent } from './new-request-options/new-request-options.component';
import { NewRequestRealEstateComponent } from './new-request-real-estate/new-request-real-estate.component';
import { EditRequestDataComponent } from './edit-request-data/edit-request-data.component';
import { GetRequestComponent } from './get-request/get-request.component';
import { ManageRequestsComponent } from './manage-requests/manage-requests.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { AssignedRequestDetailsComponent } from './assigned-request-details/assigned-request-details.component';
import { AssignSingleRequestComponent } from './assign-single-request/assign-single-request.component';
import { NewRequestLandComponent } from './new-request-land/new-request-land.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PortalDashboardComponent } from './portal-dashboard/portal-dashboard.component';
import { CallCenterComponent } from './call-center/call-center.component';
import { NewRequestUnitComponent } from './new-request-unit/new-request-unit.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'new_request_options',
    component: NewRequestOptionsComponent,
  },
  {
    path: 'new_request_real_estate',
    component: NewRequestRealEstateComponent,
  },
  {
    path: 'editRequest',
    component: EditRequestDataComponent,
  },
  { path: 'getRequest/:id', component: GetRequestComponent },
  { path: 'userRequest', component: UserRequestsComponent },
  {
    path: 'manageRequests',
    component: ManageRequestsComponent,
  },
  {
    path: 'assigned_request_details',
    component: AssignedRequestDetailsComponent,
  },
  {
    path: 'assigned_request_details',
    component: AssignedRequestDetailsComponent,
  },
  {
    path: 'assign_single_request',
    component: AssignSingleRequestComponent,
  },
  {
    path: 'new_request_land',
    component: NewRequestLandComponent,
  },
  {
    path: 'admin_login',
    component: AdminLoginComponent,
  },
  {
    path: 'portal_dashboard',
    component: PortalDashboardComponent,
  },
  {
    path: 'call_center',
    component: CallCenterComponent,
  },
  {
    path: 'new_request_unit',
    component: NewRequestUnitComponent,
  }

];
