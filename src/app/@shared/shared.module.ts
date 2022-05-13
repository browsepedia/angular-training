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
import { ReactiveFormsModule } from '@angular/forms';

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
    HttpClientModule,
    ReactiveFormsModule,
    ...materialModules,
  ],
  exports: [
    CommonModule,
    MultiplicatePipe,
    EmployeeNamePipe,
    HttpClientModule,
    ReactiveFormsModule,
    ...materialModules,
  ],
  declarations: [MultiplicatePipe, EmployeeNamePipe],
})
export class SharedModule {}
