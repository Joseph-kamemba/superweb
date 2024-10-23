import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators, FormControl, } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ForgotDialogComponent } from '../forgot-dialog/forgot-dialog.component';
import { UsersService } from '../services/users.service';
/** Error when invalid control is dirty, touched, or submitted. */

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MaterialModule, CommonModule,
     ReactiveFormsModule, RouterLink,RouterModule
    ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
 
 signupForm: FormGroup; 
  

constructor(private fb: FormBuilder,
            private dialog: MatDialog,
            private router: Router,
            
){
  this.signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
}

  ngOnInit(): void {  }
 
onSubmit(){
 if(this.signupForm.valid){
  console.log(this.signupForm.value)
 }
 else{
  console.log('invalid')
 }
}

openConfirmDialog(): void {
  const dialogRef = this.dialog.open(ForgotDialogComponent, {
    width: '300px',
    data: {message: 'Are you sure you want to reset youe password?'}
  });

dialogRef.afterClosed().subscribe((result: boolean) => {
  if (result) {
    this.router.navigateByUrl('/forgotdialog')
  }
})
}

navigateToSignUp(): void {
  this.router.navigateByUrl('/signup');
}

navigateToWidgets(): void {
  this.router.navigateByUrl('/widgets');
}

}
