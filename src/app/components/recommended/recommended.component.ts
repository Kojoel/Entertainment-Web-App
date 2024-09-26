import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Show } from '../../models/media.model';
import { selectAllShows } from '../../store/home.selectors';
import { AsyncPipe } from '@angular/common';
import { loadShows } from '../../store/home.actions';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [AsyncPipe, AsyncPipe],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.scss'
})
export class RecommendedComponent {
  allShows$: Observable<Show[]>;
  allShows = selectAllShows;

  constructor(
    public store: Store,
  ) {
    this.allShows$ = this.store.select(selectAllShows);
  }

  ngOnInit() {
    this.store.dispatch(loadShows());
    this.allShows$.subscribe(item => console.log("REcommendation: ", item))
  }
}
