import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Show } from '../../models/media.model';
import { selectAllShows } from '../../store/home.selectors';
import { loadShows } from '../../store/home.actions';
import { AsyncPipe } from '@angular/common';
import { BookmarksService } from '../../services/bookmarks.service';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss'
})
export class TrendingComponent {

  recommendedShows$: Observable<Show[]>;
  allShows = selectAllShows;

  constructor(
    public store: Store,
    public bookmarkService: BookmarksService,
  ) {
    this.recommendedShows$ = this.store.select(selectAllShows);
  }

  ngOnInit() {
    this.store.dispatch(loadShows());
    // this.recommendedShows$.subscribe(item => console.log("Recommended: ", item))
  }

}
