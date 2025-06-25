// navbar.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginFormComponent } from '../../feature/auth/login/login.component'; // Asegúrate de que la ruta es correcta
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    LoginFormComponent, // Agrega el componente de login
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showLoginModal = false; // Variable para controlar la visibilidad del modal

  toggleLoginModal() {
    this.showLoginModal = !this.showLoginModal;
  }

  onLoginModalClosed() {
    this.showLoginModal = false;
  }

  
}