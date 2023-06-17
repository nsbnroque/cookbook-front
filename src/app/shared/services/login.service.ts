import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base_url = '/api/v1/login';

  constructor(private http : HttpClient) { }
}
