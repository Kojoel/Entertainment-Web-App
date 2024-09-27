import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSearchQuery } from '../store/home.actions';
import { SearchPipe } from '../pipes/search.pipe';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private store: Store,
    private searchPipe: SearchPipe,
  ) { }

  userQuery: string = '';
  searchCount!: Observable<number>;

  setSearchQuery(query: string) {
    this.store.dispatch(setSearchQuery({query}))
    // console.log("userQuery: ", this.userQuery);
  }
}
