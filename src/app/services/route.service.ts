import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(
    public router: Router
  ) { }

  goToCategories() {
    this.router.navigate()
  }

  goToMovies() {
    this.router.navigate(['/movies'])
  }
}
