import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../../services/auth.service';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule,MatMenuModule],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {

  
  faLogout=faSignOut;
  faAccount=faUserGear

constructor(private router:Router, private authService:AuthService){

}



userProfile: any;
ngOnInit(): void {

}

onHome(){
  this.router.navigate(['admin']);
}
onAccount(){
  this.router.navigate(['admin/profile'])

}
onLogout(){

  this.authService.logout();
}


}
  




