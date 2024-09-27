import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Show } from '../../models/media.model';
import { selectAllShows } from '../../store/home.selectors';
import { AsyncPipe } from '@angular/common';
import { loadShows, toggleBookmark } from '../../store/home.actions';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [AsyncPipe, AsyncPipe],
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
  ) {
    this.allShows$ = this.store.select(selectAllShows);
  }

  ngOnInit() {
    this.store.dispatch(loadShows());
    // this.allShows$.subscribe(item => console.log("REcommendation: ", item))
  }

  toggleBookmark(title: string) {
    this.store.dispatch(toggleBookmark({title}));
  }
}
