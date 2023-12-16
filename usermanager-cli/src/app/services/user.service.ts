import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  readonly SERVER_URL = 'http://localhost:8080/users';  

  constructor(
    private http: HttpClient,
    private toastr: ToastrService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json' 
  })}

  public getHttpOtions(){
    return this.httpOptions;
  }

  public getUsers(){
    return this.http.get(this.SERVER_URL).pipe(
      map( (users: any) => users.map( (user: User[]) => new User().deserialize(user) ) )      
    );       
  }

  public postUser(user: User) {
    return this.http.post<User>(this.SERVER_URL, user, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {       
    if (error.status === 0) {     
      return throwError(() => new Error('Erro Inesperado!'));      
    } else if (error.status !== 0) {      
      return throwError(() => new Error(`Algo deu errado(${error.status}):`));            
    }    

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
 
}
