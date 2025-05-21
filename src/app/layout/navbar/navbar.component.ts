import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importa RouterModule
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatIconModule],  // Agrega RouterModule aquí
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  onLogin() {
    console.log('Login button clicked');
  }
}
