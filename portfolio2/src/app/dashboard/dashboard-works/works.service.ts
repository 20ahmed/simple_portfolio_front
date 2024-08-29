import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorksService {
  http = inject(HttpClient);

  getAllWorks(): Observable<any> {
    return this.http.get('http://localhost:3000/works');
  }

  addWork(work: IWork): Observable<any> {
    return this.http.post('http://localhost:3000/works', work);
  }

  updateWork(work: IWork): Observable<any> {
    return this.http.patch(`http://localhost:3000/works/${work._id}`, work);
  }

  deleteWork(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/works/${id}`);
  }
}

export interface IWork {
  _id?: string;
  title: string;
  description: string;
  image: string;
  link: string;
}
