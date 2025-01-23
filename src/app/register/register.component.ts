import { Component } from '@angular/core';
import { user } from '../Models/user';
import { AccountService } from '../Services/auth.service';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  newUser: user = { id: 0, username: '', password: '' };
  registrationMessage: string = '';

  constructor(private accountservice: AccountService , public router:Router) {}

  
  registerUser() {
    try {
     // this.newUser.id = this.accountservice.user.length + 1;

      this.accountservice.register(this.newUser);
      this.newUser = { id: 0, username: '', password: '' };
      this.router.navigateByUrl('/Home');
    } catch (error) {
      this.registrationMessage = (error as Error).message;
    }
  }
}
