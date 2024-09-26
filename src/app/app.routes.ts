import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';

export const routes: Routes = [
    { path:'', component: LoginComponent },
    { path:'signup', component: SignupComponent },
    { path:'home', component: HomeComponent },
    { path:'movies', component: MoviesComponent},
    { path: '**', redirectTo: '' }
];
