import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8888/';  
  constructor(private http:HttpClient) { }



  getUserList(): Observable<any> {

    return this.http.get(`${this.baseUrl}`+'getUser');  //will change ...As Per ordermanagement

  }
  // below this all the API's will be there
  // We can have the multiple connect

  createUser(user: object): Observable<object> {
    
    return this.http.post(`${this.baseUrl}`+'addUser', user);

  }



  deleteUser(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}deleteUser/${id}`, { responseType: 'text' });

  }



  getUser(name: String): Observable<Object> {

    return this.http.get(`${this.baseUrl}/getUser/${name}`);

  }



  updateUser(id: number, value: any): Observable<Object> {

    return this.http.post(`${this.baseUrl}/updateUser/${id}`, value);

  }

}
