import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectValues',
  standalone: true,
})
export class ObjectValuesPipe implements PipeTransform {
  transform(obj: any, type: 'languages' | 'currencies' = 'languages'): string {
    if (!obj || typeof obj !== 'object') {
      return 'N/A';
    }

    if (type === 'currencies') {
      return Object.values(obj)
        .map((currency: any) => currency?.name || 'Unknown')
        .join(', ');
    } else {
      return Object.values(obj).join(', ');
    }
  }
}
