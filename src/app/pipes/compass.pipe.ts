import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compass',
})
export class CompassPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    const compassPoints = [
      'North',
      'North North East',
      'North East',
      'East North East',
      'East',
      'East South East',
      'South East',
      'South South East',
      'South',
      'South South West',
      'South West',
      'West South West',
      'West',
      'West North West',
      'North West',
      'North North West',
    ];
    const rawPosition = Math.floor(value / 22.5 + 0.5);
    const arrayPosition = rawPosition % 16;
    return compassPoints[arrayPosition];
  }
}
