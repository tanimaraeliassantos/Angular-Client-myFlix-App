import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-direction',
  templateUrl: './movie-direction.component.html',
  styleUrls: ['./movie-direction.component.scss'],
})
export class MovieDirectionComponent {
  /** Injects direction data from single movie-card object for use in movie-direction component
   * @params data - string of objects
   * @params Name
   * @params Bio
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string;
      Bio: string;
    },
    public dialogRef: MatDialogRef<MovieDirectionComponent>,
    public snackBar: MatSnackBar
  ) {}
}
