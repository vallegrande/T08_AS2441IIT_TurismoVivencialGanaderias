import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experience-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule],
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.scss']
})
export class ExperienceDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ExperienceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; image: string; description: string }
  ) { }

  close(): void {
    this.dialogRef.close();
  }
}
