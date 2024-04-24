import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from '../../../../services/auth.service';
import { faAdd, faDashboard, faInfo, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-sidenav',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './admin-sidenav.component.html',
  styleUrl: './admin-sidenav.component.css'
})
export class AdminSidenavComponent {

  faAdd=faAdd
  faStd=faUser
  faDashboard=faDashboard

  faContact=faPhone

  faAbout=faInfo

  constructor(private authService:AuthService){

  }

  ngOnInit(){

  }



}
