import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private authService: AuthService){}

  public isLoggedIn$: Observable<boolean> = new Observable();

  public ngOnInit(){
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }

  public logout(){
    this.authService.logout();
  }
}
