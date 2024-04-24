import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto } from '../DTOs/login-dto.class';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterDto } from '../DTOs/register-dto.class';
import { JwtAuth } from '../authentication/jwt-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl='https://localhost:7239';
  // https://localhost:7239/api/Authentication/RegisterUser

  constructor(private httpClient:HttpClient, private router:Router, private toaster:ToastrService) { }

  setToken(token:string){
    localStorage.setItem('token',token);
    }

  setLoginStatus(status:string){
    sessionStorage.setItem('isLoggedIn',status);
  }
  
    getToken(){
      localStorage.getItem('token')
    }
  
    isLoggedIn(){
      return this.getToken()!=null
    }
  
    logout(){
      localStorage.removeItem('token');

      this.toaster.success("Logged Out successfully")
      this.router.navigate(['login']);
    }

  login(loginDto:LoginDto):Observable<JwtAuth>{
    return this.httpClient.post<JwtAuth>(this.baseUrl+"/api/Authentication/Login",loginDto)
  }

  createUser(registerDto:RegisterDto):Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"/api/Authentication/RegisterUser",registerDto)
  }


}
