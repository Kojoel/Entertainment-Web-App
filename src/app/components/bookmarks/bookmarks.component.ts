import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RecommendedComponent } from '../recommended/recommended.component';

@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [SearchbarComponent, SidebarComponent, RecommendedComponent],
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.scss'
})
export class BookmarksComponent {

}
