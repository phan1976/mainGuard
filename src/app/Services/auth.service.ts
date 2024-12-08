import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private router: Router) { }

  public logout(){
    console.log('Ban da thoat ra roi');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  public login(user: string){
    console.log('Ban da dang nhap roi ten la= ', user);
    this.router.navigate(['/home']);
    this.loggedIn.next(true);
  }

  public isLoggedIn():Observable<boolean>{
    return this.loggedIn.asObservable();
  }
}
