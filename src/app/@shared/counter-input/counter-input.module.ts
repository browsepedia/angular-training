import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterInputComponent } from './counter-input.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [CounterInputComponent],
  exports: [CounterInputComponent],
})
export class CounterInputModule {}
