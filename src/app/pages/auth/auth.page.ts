import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(){
    this.authServ.login();
    this.router.navigateByUrl('/places/discover')
  }

}
