import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceDetailComponent } from './experience-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes = [
  { path: ':id', component: ExperienceDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ExperienceDetailComponent, // Importar el standalone component
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExperienceDetailModule {}
