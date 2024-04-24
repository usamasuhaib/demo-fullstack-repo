import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AdminSidenavComponent } from '../admin-sidenav/admin-sidenav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [AdminHeaderComponent, AdminSidenavComponent, RouterOutlet],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
