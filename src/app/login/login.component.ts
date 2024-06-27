import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {HeaderComponent} from '../header/header.component'


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HeaderComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    console.log('Email:', this.email, "Password:", this.password);
    // Handle form submission logic here
    if (this.email == 'a@b.com' && this.password == "0") {
      this.router.navigate(['/movie']);

    }
    else
      alert("Wrong Credentials")


  }
}
