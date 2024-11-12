import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchJsonService {

  constructor(private http: HttpClient) {}
  getData(url: string): Observable<any> {
    return this.http.get(url);
  }
}
