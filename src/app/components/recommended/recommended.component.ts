import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Show } from '../../models/media.model';
import { selectAllShows } from '../../store/home.selectors';
import { AsyncPipe } from '@angular/common';
import { loadShows, toggleBookmark } from '../../store/home.actions';
import { BookmarksService } from '../../services/bookmarks.service';
import { SearchPipe } from '../../pipes/search.pipe';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [AsyncPipe, AsyncPipe, SearchPipe],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.scss'
})
export class RecommendedComponent {
  
  @Input() shows!: Observable<Show[]>;
  @Input() title: string = 'Recommended for you';

  allShows$: Observable<Show[]>;
  allShows = selectAllShows;

  constructor(
    public store: Store,
    public bookmarkService: BookmarksService,
    public search: SearchService,
  ) {
    this.allShows$ = this.store.select(selectAllShows);
  }

  ngOnInit() {
    this.store.dispatch(loadShows());
  }

}
