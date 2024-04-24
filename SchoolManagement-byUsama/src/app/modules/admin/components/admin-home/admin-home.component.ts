import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

  stdCount=0;
  faUser=faUserGraduate


  constructor(
    private router:Router,
    private title:Title,


  ){ 
    this.title.setTitle("Home | School Management")
    }


  }



