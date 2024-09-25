import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';
import { Observable, map } from 'rxjs';

interface User {
  name: string;
  email: string;
  password: string;
  role: string;
  profileImage: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/users'; // URL for json-server
  private loggedInUser: User | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  // Fetch users from db.json
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Login method with email and password
  login(email: string, password: string): Observable<boolean> {
    return this.getUsers().pipe(
      map((users: User[]) => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          this.loggedInUser = user;
          localStorage.setItem('user', JSON.stringify(user));
          return true;  // Login successful
        }
        return false;  // Login failed
      })
    );
  }
}
