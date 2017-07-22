import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {LoginService} from '../services/login.service';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  constructor(private loginService:LoginService,
    private alertService:AlertService,
  private route: ActivatedRoute,
        private router: Router) { 

    }

  ngOnInit() {
    this.loginService.logout()
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  login() {
    this.loading = true;
    this.loginService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        console.log("Njhbjdsbvjkds");
        this.router.navigate(['/postlogin']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }
}
