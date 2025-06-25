import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
  standalone: true,
  imports: []
})
export class ReservationFormComponent implements OnInit {
  experienceId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.experienceId = +params['id'];
      console.log('ID recibido en formulario de reserva:', this.experienceId);
      // Aquí podrías cargar info extra con el ID si lo necesitas
    });
  }
}
