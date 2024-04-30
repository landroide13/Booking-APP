import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private authServ: AuthService, private router: Router) {}

  onLogout(){
    this.authServ.logout();
    this.router.navigateByUrl('/auth')
  }
}
