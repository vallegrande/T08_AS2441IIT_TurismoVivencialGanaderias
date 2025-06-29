import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

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
  @Output() registerRequested = new EventEmitter<void>();

  showPassword = false;
  credentials = {
    email: '',
    password: ''
  };

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  async onSubmit(): Promise<void> {
    if (this.credentials.email && this.credentials.password) {
      console.log('Iniciando sesión con:', this.credentials);

      // Mostrar SweetAlert
      await Swal.fire({
        title: '¡Éxito!',
        text: 'Se inició sesión correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        timer: 2000,
        timerProgressBar: true
      });

      // Cerrar el modal
      this.close();

      // Resetear el formulario
      this.credentials = {
        email: '',
        password: ''
      };
    }
  }

  close(): void {
    this.closed.emit();
  }

  onForgotPassword(): void {
    Swal.fire({
      title: 'Recuperar contraseña',
      text: 'Ingresa tu correo electrónico',
      input: 'email',
      inputPlaceholder: 'tu@correo.com',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      preConfirm: (email) => {
        if (!email) {
          Swal.showValidationMessage('El correo es requerido');
        }
        return email;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Correo para recuperación:', result.value);
        Swal.fire(
          'Enviado',
          'Si el correo existe, recibirás un enlace para recuperar tu contraseña',
          'success'
        );
      }
    });
  }

  async loginWithGoogle(): Promise<void> {
    const { isConfirmed } = await Swal.fire({
      title: 'Iniciar sesión con Google',
      text: '¿Deseas continuar con tu cuenta de Google?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar'
    });

    if (isConfirmed) {
      console.log('Iniciando sesión con Google');
      await Swal.fire({
        title: 'Redirigiendo...',
        text: 'Serás llevado a la página de autenticación de Google',
        icon: 'info',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      });
      this.close();
    }
  }

  async loginWithFacebook(): Promise<void> {
    const { isConfirmed } = await Swal.fire({
      title: 'Iniciar sesión con Facebook',
      text: '¿Deseas continuar con tu cuenta de Facebook?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar'
    });

    if (isConfirmed) {
      console.log('Iniciando sesión con Facebook');
      await Swal.fire({
        title: 'Redirigiendo...',
        text: 'Serás llevado a la página de autenticación de Facebook',
        icon: 'info',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      });
      this.close();
    }
  }

  // Modifica el método onRegister
  onRegister(): void {
    this.registerRequested.emit(); // Solo emite el evento, no cierra el modal
  }
}