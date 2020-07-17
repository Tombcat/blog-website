import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    email: null,
    password: null
  };

  constructor(private _auth: AuthService,
              private _router: Router) {
  }

  ngOnInit(): void {
  }

  loginUser() {
    if (this.loginUserData.password == null || this.loginUserData.email == null) {
      console.log('error');
    } else {
      this._auth.loginUser(this.loginUserData)
        .subscribe(
          res => {
            console.log(res);
            localStorage.setItem('token', res.token);
            this._router.navigate(['/special']);
          },
          err => console.log(err)
        );
    }
  }
}
