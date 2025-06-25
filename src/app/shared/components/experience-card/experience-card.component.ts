import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {
  @Input() title!: string;
  @Input() image!: string;
  @Input() description!: string;
  @Input() buttonText: string = 'More info';

  @Output() moreInfo = new EventEmitter<void>();

  handleMoreInfoClick(): void {
    this.moreInfo.emit();
  }
}
