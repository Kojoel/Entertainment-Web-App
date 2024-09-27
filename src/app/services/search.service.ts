import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSearchQuery } from '../store/home.actions';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private store: Store,
  ) { }

  userQuery: string = '';
  valueCount: number = 0;

  setSearchQuery(query: string) {
    this.store.dispatch(setSearchQuery({query}))
    // console.log("userQuery: ", this.userQuery);
  }
}
