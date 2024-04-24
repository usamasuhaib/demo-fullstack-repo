import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterDto } from '../../DTOs/register-dto.class';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, ToastrModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  
  faUser=faUserFriends;
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router,
    private title:Title,
    private toaster:ToastrService,


  ){

  }

  ngOnInit(){
    this.title.setTitle(`Register User | School Management System`)

  }
  registrationForm = this.formBuilder.group({
    userName:['',Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role:['',Validators.required],
    password: ['', [Validators.required]],

  });

  onRegister(){
    console.log(this.registrationForm.value);

    if(this.registrationForm.valid){
      const data:RegisterDto={
        userName:this.registrationForm.value.userName!,
        email:this.registrationForm.value.email!,
        role:this.registrationForm.value.role!,
        password:this.registrationForm.value.password!,
      }
      this.authService.createUser(data).subscribe((res)=>{
        console.log(res.result);
        var result=res.result;

        this.toaster.success(result);
        this.router.navigate(['login'])
        
      }
    )
    }

    else{
      alert("invalid data, try again please")
    }
  }


}
