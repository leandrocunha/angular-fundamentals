import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    const rawHours = Math.floor(value / 60);
    const hours = rawHours < 10 ? `0${rawHours}` : rawHours;
    const minutes = value % 60;
    return `${hours}:${minutes}`;
  }
}
