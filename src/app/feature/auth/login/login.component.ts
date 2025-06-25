import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginFormComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

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
      // Lógica de autenticación
    }
  }

  close(): void {
    this.closed.emit();
  }

  onForgotPassword(): void {
    console.log('Solicitar recuperación de contraseña');
  }

  loginWithGoogle(): void {
    console.log('Iniciando sesión con Google');
  }

  loginWithFacebook(): void {
    console.log('Iniciando sesión con Facebook');
  }

  onRegister(): void {
    console.log('Redirigiendo a registro');
    this.close();
    // Aquí podrías navegar a la ruta de registro si es necesario
  }
}