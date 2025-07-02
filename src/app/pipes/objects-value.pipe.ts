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
      // Handle currencies which have nested objects with 'name' property
      return Object.values(obj)
        .map((currency: any) => currency?.name || 'Unknown')
        .join(', ');
    } else {
      // Default behavior for languages and other simple objects
      return Object.values(obj).join(', ');
    }
  }
}
