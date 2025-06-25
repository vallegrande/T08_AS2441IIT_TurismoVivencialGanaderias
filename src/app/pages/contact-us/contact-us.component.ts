import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule 
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit, OnDestroy {
  contactForm!: FormGroup;

  images = [
    '/images/contact-us/imgContactForm01.jpg',
    '/images/contact-us/imgContactForm02.jpg',
    '/images/contact-us/imgContactForm03.jpg'
  ];
  currentIndex = 0;
  intervalId: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Para el formulario
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)(\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+){0,2}$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)(\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+){0,2}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      message: ['', [Validators.required, Validators.maxLength(250)]]
    });

    // Para el carrusel
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 4000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
