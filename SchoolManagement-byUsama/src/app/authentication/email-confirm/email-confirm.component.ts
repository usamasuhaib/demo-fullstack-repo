import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email-confirm',
  standalone: true,
  imports: [],
  templateUrl: './email-confirm.component.html',
  styleUrl: './email-confirm.component.css'
})
export class EmailConfirmComponent {

  
constructor(private router:Router, private title:Title, private activeRoute:ActivatedRoute,){

}

result='';

ngOnInit(): void {
  this.title.setTitle(`Page Not Found  | School Management System`)

 

}
  onHome(){
    this.router.navigate(['admin'])

  }

  onContact(){
    this.router.navigate(['admin/contact'])


  }


}
