import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/core/models/recipe';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) { }


  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  findUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  getCookbook(id: number): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.baseUrl}/${id}/recipes`);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
