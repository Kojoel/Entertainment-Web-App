import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvseriesComponent } from './components/tvseries/tvseries.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';

export const routes: Routes = [
    { path:'', component: LoginComponent },
    { path:'signup', component: SignupComponent },
    { path:'home', component: HomeComponent },
    { path:'movies', component: MoviesComponent},
    { path:'tvseries', component: TvseriesComponent },
    { path: 'bookmarks', component: BookmarksComponent},
    { path: '**', redirectTo: '' }
];
