import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ReservationFormComponent implements OnInit {
  experienceId!: number;

  reserva = {
    fechaEntrada: '',
    fechaSalida: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    experiencia: '',
    comentarios: ''
  };

  errorMensaje = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.experienceId = +params['id'];
      console.log('ID recibido en formulario de reserva:', this.experienceId);
    });
  }

  enviarFormulario(formulario: NgForm) {
    this.errorMensaje = '';

    const entrada = new Date(this.reserva.fechaEntrada);
    const salida = new Date(this.reserva.fechaSalida);
    const minFecha = new Date('2025-06-28');

    if (!this.reserva.fechaEntrada || !this.reserva.fechaSalida) {
      this.errorMensaje = 'Las fechas no pueden estar vacías.';
      return;
    }

    if (entrada <= minFecha || salida <= minFecha) {
      this.errorMensaje = 'Las fechas deben ser posteriores al 28/06/2025.';
      return;
    }

    if (salida <= entrada) {
      this.errorMensaje = 'La fecha de salida debe ser posterior a la fecha de entrada.';
      return;
    }

    Swal.fire({
      icon: 'success',
      title: '¡Reserva completada!',
      text: 'Tu formulario ha sido enviado correctamente.',
      confirmButtonColor: '#2d8659'
    });

    formulario.resetForm();
  }
}
