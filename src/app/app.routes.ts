import { ReservationFormComponent } from './feature/reservation/reservation-form/reservation-form.component';
import { Routes } from '@angular/router';
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
            // Puedes agregar más rutas hijas aquí
        ],
    },

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'reservation-form'
    }
    // Puedes agregar rutas públicas o especiales fuera del layout si quieres
];
