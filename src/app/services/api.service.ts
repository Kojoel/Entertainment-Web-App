import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../models/media.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // jsonUrl = '../assets/data.json'
  jsonUrl = 'https://entertainment-web-app-backend-2.onrender.com/api/movies';

  checkFormSubmitted: boolean = false;
  loginErrorMessage: string = '';
  loginSuccessResponse: string = '';

  constructor(private http: HttpClient) { }

  getMediaData(): Observable<Show[]> {
    return this.http.get<Show[]>(this.jsonUrl);
  }


  onLogin(loginForm: { email: string; password: string }): void {
    const apiUrl = 'https://entertainment-web-app-backend-2.onrender.com/api/login';
    this.http.post(apiUrl, loginForm).subscribe({
      next: (res: any) => {
        if (res.result) {
          this.loginErrorMessage = 'Failed to login';
          // console.log("Error messsage: ", this.loginErrorMessage)
        } else {
          // console.log(res);
          this.checkFormSubmitted = true;
          this.loginSuccessResponse = res;
          localStorage.setItem('login token', res.token)
          console.log("Response message: ", this.loginSuccessResponse);
        }
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 400 && err.error?.message) {
          this.loginErrorMessage = err.error.message;
          console.log(this.loginErrorMessage);
        } else {
          this.loginErrorMessage = 'An unknown error occurred. Please try again later.';
        }
      }
    });
  }

  onSignUp(signupForm: { email: string, password: string }): Observable<any> {
    return this.http.post('https://entertainment-web-app-backend-2.onrender.com/api/register', signupForm)
  }
  

}
