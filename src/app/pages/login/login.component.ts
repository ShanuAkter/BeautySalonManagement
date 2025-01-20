import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../../service/service/admin.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: any;
  password: any;
  admin: any;
  errormessege: any;
  loginAdmin:any;
  constructor(private adminService: AdminService, private router: Router) { }




   onLogin() {
    console.log(this.email);
    console.log(this.password);
    this.adminService.loginAdmin(this.email, this.password).subscribe((data) => {
      this.admin = data;
      console.log(data);
      if (this.admin != null) {
        this.router.navigate(["/admindashboard"], {
          state: {
            response: this.admin
          }
        });
      }
      else {
        alert("Invalid Credentials");
      }
    });

  }

}
