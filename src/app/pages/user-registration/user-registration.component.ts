import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserRegistration } from '../../model/user-registration';
import { UserRegistrationService } from '../../service/user-registration.service';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  user:UserRegistration = {
    firstName : '',
    lastName : '',
    age : 0,
    email : '',
    password : '',
    confirmPassword : ''
  };

  constructor( private userRegistrationService:UserRegistrationService ,private router:Router){}

  public onRegistration(){
    console.log(this.user);
    this.userRegistrationService.userRegistration(this.user).subscribe(()=>{
      this.router.navigateByUrl('home');
    })
  }

}
