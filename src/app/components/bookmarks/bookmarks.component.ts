import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RecommendedComponent } from '../recommended/recommended.component';
import { selectBookmarkedMovies, selectBookmarkedSeries, selectBookmarkedShows } from '../../store/home.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Show } from '../../models/media.model';

@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [SearchbarComponent, SidebarComponent, RecommendedComponent],
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.scss'
})
export class BookmarksComponent {
  bookmarkedMovies$!: Observable<Show[]>;
  bookmarkedSeries$!: Observable<Show[]>;

  constructor(
    public store: Store,
  ) {
    this.bookmarkedMovies$ = this.store.select(selectBookmarkedMovies);
    this.bookmarkedSeries$ = this.store.select(selectBookmarkedSeries);
  }

  ngOnInit() {
    this.bookmarkedMovies$.subscribe(item => console.log("Bookmarked Movies: ", item));
    this.bookmarkedSeries$.subscribe(item => console.log("Bookmarked Series: ", item));
  }

}
