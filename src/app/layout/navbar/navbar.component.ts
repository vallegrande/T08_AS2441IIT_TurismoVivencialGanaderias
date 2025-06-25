import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginFormComponent } from '../../feature/auth/login/login.component';
import { RegisterComponent } from '../../feature/auth/register/register.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    LoginFormComponent,
    RegisterComponent,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showLogin = false;
  showRegister = false;

  openLogin(): void {
    this.showLogin = true;
    this.showRegister = false;
  }

  openRegister(): void {
    this.showRegister = true;
    this.showLogin = false;
  }

  switchToRegister(): void {
    this.showLogin = false;
    this.showRegister = true;
  }

  switchToLogin(): void {
    this.showRegister = false;
    this.showLogin = true;
  }

  closeAllModals(): void {
    this.showLogin = false;
    this.showRegister = false;
  }
}