import { Routes } from '@angular/router';
import { ReservationFormComponent } from './feature/reservation/reservation-form/reservation-form.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./pages/landing-page/landing.component').then(m => m.LandingComponent),
            },
            {
                path: 'reservation-form',
                component: ReservationFormComponent
            },
            {
                path: 'contact-us',
                loadComponent: () =>
                    import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent),
            },
            {
                path: 'experiences',
                loadComponent: () =>
                    import('./pages/experiences/experiences.component').then(m => m.ExperiencesComponent),
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'reservation-form'
    }
];
