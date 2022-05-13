import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingFieldComponent } from './star-rating-field.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  declarations: [StarRatingFieldComponent],
  exports: [StarRatingFieldComponent],
})
export class StarRatingFieldModule {}
