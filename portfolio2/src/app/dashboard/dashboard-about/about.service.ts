import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  http = inject(HttpClient);

  getAbout(): Observable<any> {
    return this.http.get('http://localhost:3000/about');
  }

  updateAbout(data: IAbout): Observable<any> {
    return this.http.patch('http://localhost:3000/about', data);
  }
}

export interface IAbout {
  description: string;
  image: string;
  resumeLink: string;
}
