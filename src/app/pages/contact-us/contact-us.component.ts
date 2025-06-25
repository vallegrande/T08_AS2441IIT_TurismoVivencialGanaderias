import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-us',
  standalone: true, // si usas standalone components
  imports: [CommonModule, MatIconModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  images = [
    '/images/contact-us/imgContactForm01.jpg',
    '/images/contact-us/imgContactForm02.jpg',
    '/images/contact-us/imgContactForm03.jpg'
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 4000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
