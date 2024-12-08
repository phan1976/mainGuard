import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private router: Router) { }

  public login(user: string){
    console.log('Ban da vua log in roi :',user);
    this.loggedIn.next(true);
    this.router.navigate(['/home']);
  }

  public logout(){
    console.log('Ban vua log out roi day');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }
}
