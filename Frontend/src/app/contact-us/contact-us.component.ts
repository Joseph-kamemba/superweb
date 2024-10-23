import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

export interface newComment{
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
 userForm: FormGroup; 
  constructor(private userService: UsersService,
              private fb:FormBuilder
  ){
this.userForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', Validators.required],
  phoneNumber: ['', Validators.required],
  subject: ['', Validators.required],
  message:['', Validators.required]
  });}

  users: newComment[]=[];
  user: newComment={
    name: "",
    email:"",
    phoneNumber:"",
    subject:"",
    message:""
  }

 


 
onSendComments(){
  console.log('Button Clicked');
  console.log(this.userForm)
  this.userService.addUsers(this.userForm).subscribe();
}
}
