import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  loginform: FormGroup;

  constructor(){
    this.loginform = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(){
    if(this.loginform.valid){
      console.log(this.loginform.value );
    }
    else{
      console.log('invalid');
    }
  }

}
