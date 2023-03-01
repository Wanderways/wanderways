import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asPercentage',
  standalone: true
})
export class AsPercentagePipe implements PipeTransform {
  transform(current: number, max: number): number {
    if (max === 0) return 0;
    if (current > max) return 100;
    return Math.floor((current / max) * 100)
  }
}
