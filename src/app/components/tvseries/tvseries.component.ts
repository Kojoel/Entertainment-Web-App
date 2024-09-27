import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RecommendedComponent } from '../recommended/recommended.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Show } from '../../models/media.model';
import { selectTVSeries } from '../../store/home.selectors';

@Component({
  selector: 'app-tvseries',
  standalone: true,
  imports: [SearchbarComponent, SidebarComponent, RecommendedComponent],
  templateUrl: './tvseries.component.html',
  styleUrl: './tvseries.component.scss'
})
export class TvseriesComponent {
  tvseries$!: Observable<Show[]>;

  constructor(
    public store: Store,
  ) {
    this.tvseries$ = this.store.select(selectTVSeries);
  }

  ngOnInit() {

  }

}
