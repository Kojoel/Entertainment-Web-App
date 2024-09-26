import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { RecommendedComponent } from '../recommended/recommended.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [SidebarComponent, SearchbarComponent, RecommendedComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

}
