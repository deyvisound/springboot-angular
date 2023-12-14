import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  SERVER_URL = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get(`${this.SERVER_URL}`).pipe(
      map( (users: any) => users.map( (user: User[]) => new User().deserialize(user) ) )      
    );       
  }

}
