import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { RecommendedComponent } from '../recommended/recommended.component';
import { Store } from '@ngrx/store';
import { loadShows } from '../../store/home.actions';
import { Observable } from 'rxjs';
import { Show } from '../../models/media.model';
import { selectMovies } from '../../store/home.selectors';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [SidebarComponent, SearchbarComponent, RecommendedComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  movies$!: Observable<Show[]>;

  constructor(
    public store: Store,
  ) {
    this.movies$ = this.store.select(selectMovies);
  }

  ngOnInit() {
    
  }

    
}
