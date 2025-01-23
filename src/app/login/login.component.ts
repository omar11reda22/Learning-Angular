import { Component } from '@angular/core';
import { AccountService } from '../Services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(public auth: AccountService) {

  }
  login() {
    this.auth.login(this.username, this.password);
  }
}
