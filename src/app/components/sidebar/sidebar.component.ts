import { Component } from '@angular/core';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  selected: boolean = false;

  constructor(
    public routerService: RouteService
  ) {}

  toggleNavStyle() {
    this.selected = !this.selected;
  }
}
