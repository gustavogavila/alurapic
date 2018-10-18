import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private userService: UserService) { }

  authenticate(userName: string, password: string): Observable<any> {
    // solicita a geração do token para a API
    return this.http.post(API_URL + '/user/login', 
      {userName, password}, 
      {observe: 'response'}
      )
      .pipe(tap(res => {
        // o token virá no header da resposta
        const authToken = res.headers.get('x-access-token');
        
        // armazeno o token no localStorage através do tokenService
        this.userService.setToken(authToken);
        console.log(`User ${userName} authenticated with token ${authToken}`);
      }));
  }
}
