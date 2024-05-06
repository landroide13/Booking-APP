import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false;

  constructor(private authServ: AuthService, 
              private router: Router,
              private loadingCtr: LoadingController) { }

  ngOnInit() {
  }

  onLogin(){
    this.isLoading = true
    this.authServ.login();
    this.loadingCtr.create({ keyboardClose: true, message: 'Login in'})
                    .then(loadingEl => {
                      loadingEl.present();
                      setTimeout(() => {
                        this.isLoading = false;
                        this.router.navigateByUrl('/places/discover');
                        loadingEl.dismiss();
                      }, 5000) 
                    });
  }

}
