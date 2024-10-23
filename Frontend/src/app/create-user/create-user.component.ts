import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

export interface newUser{
  id: number;
  username: string;
  email: string;
  password: string
}

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [MatFormField, MatInputModule, MatIconModule,
    MatButtonModule, MatTableModule, MatSortModule,
   CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
generate() {
throw new Error('Method not implemented.');
}
Reset() {
throw new Error('Method not implemented.');
}
  addUserForm!: FormGroup;
  userName: string='';
  password: string='';
 email:string = '';
 dialog: any;
displayedColumns: any;
loading: boolean =false;


constructor(
      private formBuilder : FormBuilder,
      private snackBar: MatSnackBar,
      private router: Router,
      private usersService: UsersService
){}

users: newUser[]=[];
user: newUser={
  id: 0,
  username: "",
  email:"",
  password:""
}

ngOnInit(): void {
  this.addUserForm = this.formBuilder.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
}

openSnackBar(message: string, success: boolean): void {
  const panelClass = success ? ['snackbar-success'] : ['snackbar-danger'];
  this.snackBar.open(message, 'X', {
    duration: 5000,
    horizontalPosition: 'end',
    verticalPosition: 'top',
    panelClass: panelClass
  });
}

onSubmit(): void {
  if (this.addUserForm.valid) {
    const user = this.addUserForm.value;
     console.log('UserInfo:', user);
     this.usersService.addUsers(user).subscribe({
       next:((res) => {
         console.log('User created successfully:', res);
         this.loading=false;
         this.openSnackBar("User created successfully", true);
       }),
      error: ((error) => {
       console.error('Error creating user:', error);
       this.loading=false;
       this.openSnackBar("Error Creating User", false);
       }),
       complete: (()=> {})
     })
     
   }

}

setUser(user:newUser){
  console.log('Edit clicked');
  this.user.username=user.username;
  this.user.id=user.id;
  this.user.email=user.email;
  this.user.password=user.password
}

}
