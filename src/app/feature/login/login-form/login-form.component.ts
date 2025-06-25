import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  showPassword = false;
  credentials = {
    email: '',
    password: ''
  };

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.credentials.email && this.credentials.password) {
      console.log('Iniciando sesión con:', this.credentials);
      // Aquí iría la lógica para autenticar al usuario
      // Por ejemplo, llamar a un servicio de autenticación
    }
  }

  onForgotPassword(): void {
    console.log('Solicitar recuperación de contraseña');
    // Lógica para recuperar contraseña
  }

  loginWithGoogle(): void {
    console.log('Iniciando sesión con Google');
    // Lógica para autenticación con Google
  }

  loginWithFacebook(): void {
    console.log('Iniciando sesión con Facebook');
    // Lógica para autenticación con Facebook
  }

  onRegister(): void {
    console.log('Redirigiendo a registro');
    // Lógica para redirigir al formulario de registro
  }
}