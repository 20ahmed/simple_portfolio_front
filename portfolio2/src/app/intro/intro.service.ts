import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntroService {
  http = inject(HttpClient);

  getHomeInfo(): Observable<any> {
    return this.http.get('http://localhost:3000/home');
  }

  updateHomeInfo(data: IHome): Observable<any> {
    return this.http.patch('http://localhost:3000/home', data);
  }
}

export interface IHome {
  name: string;
  firstTitle: string;
  secondTitle: string;
  address: string;
  description1: string;
  description2: string;
  resumeLink: string;
  image: string;
}
