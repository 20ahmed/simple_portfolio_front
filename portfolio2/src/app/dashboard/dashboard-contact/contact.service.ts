import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  http = inject(HttpClient);

  getMessages(): Observable<any> {
    return this.http.get('http://localhost:3000/contacts');
  }

  createMessage(message: IMessage): Observable<any> {
    return this.http.post('http://localhost:3000/contacts', message);
  }

  deleteMessage(_id: string | undefined): Observable<any> {
    return this.http.delete(`http://localhost:3000/contacts/${_id}`);
  }
}

export interface IMessage {
  _id?: string;
  name: string;
  email: string;
  message: string;
}
