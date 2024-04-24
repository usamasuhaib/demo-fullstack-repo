import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

  
constructor(private router:Router, private title:Title){

}

ngOnInit(){
  this.title.setTitle(`Page Not Found  | School Management System`)

}
  onHome(){
    this.router.navigate(['admin'])

  }

  onContact(){
    this.router.navigate(['admin/contact'])


  }

}
