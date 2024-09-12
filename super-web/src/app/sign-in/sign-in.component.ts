import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  FormBuilder, 
  FormControl, 
  FormGroup, 
  FormGroupDirective, 
  NgForm, 
  Validators } from '@angular/forms';
  import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
/** Error when invalid control is dirty, touched, or submitted. */

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  
  navigateToSignUp(): void{
    this.router.navigate(['/signup']);
  }
}
