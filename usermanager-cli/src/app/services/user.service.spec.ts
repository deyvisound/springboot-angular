import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

fdescribe('UserService', () => {
  
  let service: UserService;
  let http: HttpClient;
  let user: User; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    http = TestBed.inject(HttpClient);

    user = new User();
    user.name = "Deyvison Estevam"
    user.email = "deyvison@email.com"
    user.password = "$2a$12$aeWJaEWmq2PhYmZtSYHhTubglhJNIBFj4yLTosesStkAXsE86ZSju";  

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be listUsers', () => {
    const spy = spyOn( http , 'get' ).and.callThrough();
    service.getUsers();
    expect(spy).toHaveBeenCalledWith('http://localhost:8080/users');
  });

  it('should create user', () => {    
    const spy = spyOn( http , 'post' ).and.callThrough();
    service.postUser(user);
    expect(spy).toHaveBeenCalledWith('http://localhost:8080/users', user, service.getHttpOtions() );
  });

});
