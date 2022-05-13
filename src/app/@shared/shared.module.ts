import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmployeeNamePipe, MultiplicatePipe } from './pipes';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterInputModule } from './counter-input/counter-input.module';
import { StarRatingFieldModule } from './star-rating-field';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatExpansionModule,
  MatListModule,
];

@NgModule({
  imports: [
    CommonModule,
    StarRatingFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    CounterInputModule,
    FormsModule,
    ...materialModules,
  ],
  exports: [
    CommonModule,
    MultiplicatePipe,
    StarRatingFieldModule,
    FormsModule,
    EmployeeNamePipe,
    HttpClientModule,
    ReactiveFormsModule,
    CounterInputModule,
    ...materialModules,
  ],
  declarations: [MultiplicatePipe, EmployeeNamePipe],
})
export class SharedModule {}
