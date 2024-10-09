import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-super-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './super-admin.component.html',
  styleUrl: './super-admin.component.css',
})
export class SuperAdminComponent {}
