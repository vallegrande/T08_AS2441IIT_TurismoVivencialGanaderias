import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();
  @Output() loginRequested = new EventEmitter<void>();

  showPassword = false;
  userData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  async onSubmit(): Promise<void> {
    if (this.userData.password !== this.userData.confirmPassword) {
      await Swal.fire({
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    console.log('Registrando usuario:', this.userData);

    await Swal.fire({
      title: '¡Registro exitoso!',
      text: 'Tu cuenta ha sido creada correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      timer: 2000,
      timerProgressBar: true
    });

    this.closeModal(); // Cambiado de close() a closeModal()
    this.loginRequested.emit();
    this.resetForm();
  }

  closeModal(): void { // Nuevo método para cerrar el modal
    this.closed.emit();
  }

  onLogin(): void {
    this.loginRequested.emit(); // Solo emite el evento, no cierra el modal
  }

  resetForm(): void {
    this.userData = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
}