import { Component } from '@angular/core';
import { EmailService } from '../../../../services/email.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { EmailDto } from '../../../../DTOs/email-dto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-contact.component.html',
  styleUrl: './admin-contact.component.css'
})
export class AdminContactComponent {

  constructor(
    private emailService:EmailService,
    private router:Router,
    private toaster:ToastrService,
    private formBuilder:FormBuilder,
    private title:Title,
  ){

  }

  emailForm=this.formBuilder.group({

    from: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    body: ['',[Validators.required]]

  });

  ngOnInit(){
    this.title.setTitle("Contact Us | School Management System")

  }

  sendEmail(){

    console.log(this.emailForm.value);

    if(this.emailForm.valid){

      const emailDto:EmailDto={
        from:this.emailForm.value.from!,
        subject:this.emailForm.value.subject!,
        body:this.emailForm.value.body!,
      }

      this.emailService.sendEmail(emailDto).subscribe((result)=>{

        console.log("email send successffully")
        this.toaster.success("Query Send Successfylly")
        this.router.navigate(['/admin/home'])

      },
      (err:Error)=>{
        console.log(err.message);
      }
    )

    }
    
  }
}
