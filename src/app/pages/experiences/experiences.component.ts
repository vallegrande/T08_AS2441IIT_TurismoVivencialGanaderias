import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from '../../shared/components/experience-card/experience-card.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ExperienceDialogComponent } from '../../shared/components/experience-dialog/experience-dialog.component';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent, MatDialogModule],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  constructor(private dialog: MatDialog) { }

  openDialog(exp: any): void {
    this.dialog.open(ExperienceDialogComponent, {
      data: {
        title: exp.title,
        image: exp.image,
        description: exp.description
      },
      width: '600px'
    });
  }

  experiences = [
    {
      title: 'Senderismo',
      image: 'images/experiences/senderismo.jpg',
      description: 'Sumérgete en la naturaleza con nuestras caminatas guiadas por senderos rurales llenos de vida, paisajes impresionantes y aire puro. Una experiencia perfecta para desconectar de la ciudad y reconectar contigo mismo.'
    },
    {
      title: 'Cocina Tradicional',
      image: 'images/experiences/cocinatradicional.jpg',
      description: 'Aprende los secretos de la cocina campesina preparando recetas ancestrales junto a familias locales. Vive una experiencia sensorial cocinando con leña, ingredientes naturales y mucho cariño.'
    },
    {
      title: 'Actividades Agrícolas',
      image: 'images/experiences/actividadagricolas.jpg',
      description: 'Participa en la vida del campo ayudando en la siembra, el riego y la cosecha. Descubre el valor del trabajo agrícola y siente la satisfacción de conectar con la tierra que nos alimenta.'
    },
    {
      title: 'Alojamientos',
      image: 'images/experiences/alojamiento.jpg',
      description: 'Disfruta de una estadía única en alojamientos rurales acogedores, rodeados de naturaleza. Vive el confort del campo con el calor de una familia que te hará sentir como en casa.'
    },
    {
      title: 'Artesanías',
      image: 'images/experiences/artesania.jpg',
      description: 'Crea tu propia artesanía con técnicas tradicionales y materiales del entorno. Aprende de los sabios del campo mientras das forma a una pieza única que te llevarás como recuerdo.'
    },
    {
      title: 'Juegos en Familia',
      image: 'images/experiences/juegos.jpg',
      description: 'Revive los juegos de antaño con dinámicas rurales llenas de diversión. Ideal para compartir en familia o con amigos, reirás, competirás y fortalecerás lazos con alegría.'
    },
    {
      title: 'Ordeño',
      image: 'images/experiences/ordeño.jpg',
      description: 'Vive una mañana diferente aprendiendo a ordeñar una vaca, entendiendo el proceso y valorando el origen de la leche fresca. ¡Una experiencia auténtica e inolvidable!'
    },
    {
      title: 'Paseo a Caballo',
      image: 'images/experiences/paseocaballo.jpg',
      description: 'Recorre paisajes rurales a lomos de un noble caballo. Conéctate con la tranquilidad del entorno mientras disfrutas de una experiencia tradicional y relajante.'
    },
    {
      title: 'Queso Artesanal',
      image: 'images/experiences/queso.jpg',
      description: 'Conviértete en maestro quesero por un día. Aprende a preparar queso artesanal desde la leche fresca hasta el producto final. Degusta tu creación y descubre su sabor único.'
    },
    {
      title: 'Taller de Costura',
      image: 'images/experiences/tallercostura.jpg',
      description: 'Cose y borda junto a mujeres del campo que te enseñarán con paciencia y tradición. Llévate una prenda hecha por ti como símbolo de esfuerzo, cultura y arte local.'
    },
    {
      title: 'Visita a Animales',
      image: 'images/experiences/visitaanimales.jpg',
      description: 'Interactúa con vacas, ovejas, gallinas y más animales de la granja. Una experiencia educativa, cercana y perfecta para niños y amantes de la naturaleza.'
    },
    {
      title: 'Elaboración de Pan Artesanal',
      image: 'images/experiences/panartesanal.jpg',
      description: 'Amasa, hornea y saborea tu propio pan artesanal en horno de barro. Con ingredientes naturales y manos campesinas, descubrirás el verdadero sabor del pan tradicional.'
    },
    {
      title: 'Plantas Silvestres Comestibles',
      image: 'images/experiences/plantascomestibles.jpg',
      description: 'Aprende a identificar, recolectar y preparar plantas silvestres comestibles junto a conocedores locales. Un recorrido educativo por la sabiduría natural del campo.'
    },
    {
      title: 'Fabricación de Abono Orgánico',
      image: 'images/experiences/abonoorganico.jpg',
      description: 'Descubre cómo la naturaleza se renueva transformando desechos en abono. Participa en este proceso ecológico y aprende a cuidar la tierra con métodos sostenibles.'
    }
  ];
}
