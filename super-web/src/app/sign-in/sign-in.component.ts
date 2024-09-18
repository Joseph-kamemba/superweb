import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ForgotDialogComponent } from '../forgot-dialog/forgot-dialog.component';
/** Error when invalid control is dirty, touched, or submitted. */

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MaterialModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  
  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  
  navigateToSignUp(): void{
    this.router.navigate(['/signup']);
  }

  openConfirmDialog(): void{

    const forgotDialog = this.dialog.open(ForgotDialogComponent, {
      height: '30vh',
      width:'20vw'
    });

  }
}
