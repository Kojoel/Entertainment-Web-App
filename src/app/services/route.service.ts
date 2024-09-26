import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(
    public router: Router
  ) { }

  goToHome() {
    this.router.navigate(['/home'])
  }

  goToMovies() {
    this.router.navigate(['/movies'])
  }

  goToSeries() {
    this.router.navigate(['tvseries'])
  }

  goToBookmarks() {
    this.router.navigate(['bookmarks'])
  }
}
