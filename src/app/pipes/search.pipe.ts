import { Pipe, PipeTransform } from '@angular/core';
import { Show } from '../models/media.model';
import { SearchService } from '../services/search.service';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  constructor(
    public search: SearchService
  ) {}

  transform(value: Show[] | null, query: string) {
    if(value) {
      this.search.valueCount = value.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).length;
      return value.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    }
    else {
      this.search.valueCount = 0;
      return [];
    }
  }

}
