import { Pipe, PipeTransform } from '@angular/core';
import { Show } from '../models/media.model';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: Show[] | null, query: string) {
    if(value) {
      return value.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    }
    else {
      return [];
    }
  }

}
