import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RecommendedComponent } from '../recommended/recommended.component';
import { selectBookmarkedShows } from '../../store/home.selectors';
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
  bookmarked$!: Observable<Show[]>;

  constructor(
    public store: Store,
  ) {
    this.bookmarked$ = this.store.select(selectBookmarkedShows);
  }

  ngOnInit() {
    this.bookmarked$.subscribe(item => console.log("Bookmarked: ", item));
  }

}
