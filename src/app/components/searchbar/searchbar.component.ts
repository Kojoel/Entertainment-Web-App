import { Component, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Store } from '@ngrx/store';
import { setSearchQuery } from '../../store/home.actions';
import { Observable } from 'rxjs/internal/Observable';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FormsModule, SearchPipe],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {

  @Input() placeholder: string = 'something';

  constructor(
    public search: SearchService,
  ) {

  }



}
