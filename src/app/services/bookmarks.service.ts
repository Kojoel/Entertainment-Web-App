import { Injectable } from '@angular/core';
import { toggleBookmark } from '../store/home.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  constructor(
    private store: Store
  ) { }

  toggleBookmark(title: string) {
    this.store.dispatch(toggleBookmark({title}));
  }
}
