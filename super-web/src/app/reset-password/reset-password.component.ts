import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
resetform: FormGroup;


constructor() {
  this.resetform = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
}

onSubmit(){
  if(this.resetform.valid){
    console.log(this.resetform.value)
  }
  else{
    console.log('invalid')
  }
}

}
