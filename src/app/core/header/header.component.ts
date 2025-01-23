import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { AccountService } from '../../Services/auth.service';


@Component({
  selector: 'app-header',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
/**
 *
 */
constructor(public auth:AccountService) {
  
  
}
logout(){
  this.auth.logOut();
}
}
