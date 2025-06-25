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
  styleUrls: ['./experience-detail.component.scss']
})
export class ExperienceDetailComponent implements OnInit {
  experienceId!: number;
  experience?: Experience;

  isDescriptionExpanded = false;
  selectedRating = 0;

  comments = [
    { name: 'Eduardo', text: 'Una experiencia única y enriquecedora. La calidez de la comunidad fue increíble.' },
    { name: 'Luis', text: 'Pasar el día en la comunidad rural fue inolvidable. ¡100% recomendado!' }
  ];

  newCommentName = '';
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
      description: 'Sumérgete en la naturaleza con nuestras caminatas guiadas por senderos rurales llenos de vida, paisajes impresionantes y aire puro. Una experiencia perfecta para desconectar de la ciudad y reconectar contigo mismo.'
    },
    {
      id: 2,
      title: 'Cocina Tradicional',
      image: 'images/experiences/cocinatradicional.jpg',
      description: 'Aprende los secretos de la cocina campesina...'
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.experienceId = +params['id'];
      this.experience = this.experiences.find(exp => exp.id === this.experienceId);

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
      queryParams: { id: this.experienceId }
    });
  }

  addComment(): void {
    if (this.newCommentName.trim() && this.newCommentText.trim()) {
      this.comments.push({
        name: this.newCommentName.trim(),
        text: this.newCommentText.trim()
      });

      this.newCommentName = '';
      this.newCommentText = '';
    }
  }
}
