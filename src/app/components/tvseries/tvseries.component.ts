import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RecommendedComponent } from '../recommended/recommended.component';

@Component({
  selector: 'app-tvseries',
  standalone: true,
  imports: [SearchbarComponent, SidebarComponent, RecommendedComponent],
  templateUrl: './tvseries.component.html',
  styleUrl: './tvseries.component.scss'
})
export class TvseriesComponent {

}
