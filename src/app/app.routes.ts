import { ReservationFormComponent } from './feature/reservation/reservation-form/reservation-form.component';
import { LoginFormComponent } from './feature/login/login-form/login-form.component';
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
        path: 'login-form',
        component: LoginFormComponent
      }
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
