import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeName',
})
export class EmployeeNamePipe implements PipeTransform {
  transform(
    {
      firstName,
      lastName,
    }: {
      firstName: string;
      lastName: string;
    },
    args: string
  ): string {
    console.log('EmployeeNamePipe', args);
    return `${firstName} ${lastName}`;
  }
}
