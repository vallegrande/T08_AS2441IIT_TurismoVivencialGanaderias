import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from '../../shared/components/experience-card/experience-card.component';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  experiences = [
    { title: 'Senderismo', image: 'images/experiences/senderismo.jpg' },
    { title: 'Cocina Tradicional', image: 'images/experiences/cocinatradicional.jpg' },
    { title: 'actividades agricolas', image: 'images/experiences/actividadagricolas.jpg' },
    { title: 'Alojamientos', image: 'images/experiences/alojamiento.jpg' },
    { title: 'Artesanias', image: 'images/experiences/artesania.jpg' },
    { title: 'Juegos en Familia', image: 'images/experiences/juegos.jpg' },
    { title: 'Ordeño', image: 'images/experiences/ordeño.jpg' },
    { title: 'Paseo a Caballo', image: 'images/experiences/paseocaballo.jpg' },
    { title: 'Queso Artesanal', image: 'images/experiences/queso.jpg' },
    { title: 'Taller de Costura', image: 'images/experiences/tallercostura.jpg' },
    { title: 'Visita a Animales', image: 'images/experiences/visitaanimales.jpg' },
    { title: 'Elaboracion de Pan Artesanal', image: 'images/experiences/panartesanal.jpg' },
    { title: 'Plantas Silvestres Comestibles', image: 'images/experiences/plantascomestibles.jpg' },
    { title: 'Fabricación de Abono Orgánico', image: 'images/experiences/abonoorganico.jpg' },
    
  ];
}


