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
    const arrayPosition = value % 16;
    console.log(value);
    return compassPoints[arrayPosition];
  }
}
