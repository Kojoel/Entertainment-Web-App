import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../models/media.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  jsonUrl = '../assets/data.json'

  constructor(private http: HttpClient) { }

  getMediaData(): Observable<Show[]> {
    return this.http.get<Show[]>(this.jsonUrl);
  }
}
