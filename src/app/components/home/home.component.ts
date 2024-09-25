import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TrendingComponent } from '../trending/trending.component';
import { RecommendedComponent } from '../recommended/recommended.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchbarComponent, SidebarComponent, TrendingComponent, RecommendedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
