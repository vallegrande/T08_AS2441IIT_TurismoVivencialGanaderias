import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Experience {
  id: number;
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss'],
})
export class ExperienceDetailComponent implements OnInit {
  experienceId!: number;
  experience?: Experience;

  isDescriptionExpanded = false;
  selectedRating = 0;

  comments = [
    {
      name: 'Eduardo',
      text: 'Una experiencia única y enriquecedora. La calidez de la comunidad fue increíble.',
    },
    {
      name: 'Luis',
      text: 'Pasar el día en la comunidad rural fue inolvidable. ¡100% recomendado!',
    },
  ];

  newCommentText = '';

  imageUrl = '';
  location = '';
  duration = '1 día';
  price = 'S/150 por persona';
  fullDescription = '';

  experiences: Experience[] = [
    {
      id: 1,
      title: 'Senderismo',
      image: 'images/experiences/senderismo.jpg',
      description:
        'Sumérgete en la naturaleza con nuestras caminatas guiadas por senderos rurales llenos de vida, paisajes impresionantes y aire puro. Una experiencia perfecta para desconectar de la ciudad y reconectar contigo mismo.',
    },
    {
      id: 2,
      title: 'Cocina Tradicional',
      image: 'images/experiences/cocinatradicional.jpg',
      description:
        'Aprende los secretos de la cocina campesina preparando recetas ancestrales junto a familias locales. Vive una experiencia sensorial cocinando con leña, ingredientes naturales y mucho cariño.',
    },
    {
      id: 3,
      title: 'Actividades Agrícolas',
      image: 'images/experiences/actividadagricolas.jpg',
      description:
        'Participa en la vida del campo ayudando en la siembra, el riego y la cosecha. Descubre el valor del trabajo agrícola y siente la satisfacción de conectar con la tierra que nos alimenta.',
    },
    {
      id: 4,
      title: 'Alojamientos',
      image: 'images/experiences/alojamiento.jpg',
      description:
        'Disfruta de una estadía única en alojamientos rurales acogedores, rodeados de naturaleza. Vive el confort del campo con el calor de una familia que te hará sentir como en casa.',
    },
    {
      id: 5,
      title: 'Artesanías',
      image: 'images/experiences/artesania.jpg',
      description:
        'Crea tu propia artesanía con técnicas tradicionales y materiales del entorno. Aprende de los sabios del campo mientras das forma a una pieza única que te llevarás como recuerdo.',
    },
    {
      id: 6,
      title: 'Juegos en Familia',
      image: 'images/experiences/juegos.jpg',
      description:
        'Revive los juegos de antaño con dinámicas rurales llenas de diversión. Ideal para compartir en familia o con amigos, reirás, competirás y fortalecerás lazos con alegría.',
    },
    {
      id: 7,
      title: 'Ordeño',
      image: 'images/experiences/ordeño.jpg',
      description:
        'Vive una mañana diferente aprendiendo a ordeñar una vaca, entendiendo el proceso y valorando el origen de la leche fresca. ¡Una experiencia auténtica e inolvidable!',
    },
    {
      id: 8,
      title: 'Paseo a Caballo',
      image: 'images/experiences/paseocaballo.jpg',
      description:
        'Recorre paisajes rurales a lomos de un noble caballo. Conéctate con la tranquilidad del entorno mientras disfrutas de una experiencia tradicional y relajante.',
    },
    {
      id: 9,
      title: 'Queso Artesanal',
      image: 'images/experiences/queso.jpg',
      description:
        'Conviértete en maestro quesero por un día. Aprende a preparar queso artesanal desde la leche fresca hasta el producto final. Degusta tu creación y descubre su sabor único.',
    },
    {
      id: 10,
      title: 'Taller de Costura',
      image: 'images/experiences/tallercostura.jpg',
      description:
        'Cose y borda junto a mujeres del campo que te enseñarán con paciencia y tradición. Llévate una prenda hecha por ti como símbolo de esfuerzo, cultura y arte local.',
    },
    {
      id: 11,
      title: 'Visita a Animales',
      image: 'images/experiences/visitaanimales.jpg',
      description:
        'Interactúa con vacas, ovejas, gallinas y más animales de la granja. Una experiencia educativa, cercana y perfecta para niños y amantes de la naturaleza.',
    },
    {
      id: 12,
      title: 'Elaboración de Pan Artesanal',
      image: 'images/experiences/panartesanal.jpg',
      description:
        'Amasa, hornea y saborea tu propio pan artesanal en horno de barro. Con ingredientes naturales y manos campesinas, descubrirás el verdadero sabor del pan tradicional.',
    },
    {
      id: 13,
      title: 'Plantas Silvestres Comestibles',
      image: 'images/experiences/plantascomestibles.jpg',
      description:
        'Aprende a identificar, recolectar y preparar plantas silvestres comestibles junto a conocedores locales. Un recorrido educativo por la sabiduría natural del campo.',
    },
    {
      id: 14,
      title: 'Fabricación de Abono Orgánico',
      image: 'images/experiences/abonoorganico.jpg',
      description:
        'Descubre cómo la naturaleza se renueva transformando desechos en abono. Participa en este proceso ecológico y aprende a cuidar la tierra con métodos sostenibles.',
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.experienceId = +params['id'];
      this.experience = this.experiences.find(
        (exp) => exp.id === this.experienceId
      );

      if (this.experience) {
        this.imageUrl = this.experience.image;
        this.location = this.experience.title;
        this.fullDescription = this.experience.description;
      }
    });
  }

  toggleDescription(): void {
    this.isDescriptionExpanded = !this.isDescriptionExpanded;
  }

  setRating(value: number): void {
    this.selectedRating = value;
  }

  goToReservation(): void {
    this.router.navigate(['/reservation-form'], {
      queryParams: { id: this.experienceId },
    });
  }

  addComment(): void {
    const textToUse = this.newCommentText.trim();

    if (textToUse) {
      this.comments.push({
        name: 'Invitado',
        text: textToUse,
      });

      this.newCommentText = '';
    }
  }
}
