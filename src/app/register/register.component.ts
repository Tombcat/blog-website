import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    email: null,
    password: null
  };

  constructor(private _auth: AuthService,
              private _router: Router) {
  }

  ngOnInit(): void {
  }

  registerUser() {
    if (this.registerUserData.password == null || this.registerUserData.email == null) {
      console.log('error');
    } else {
      this._auth.registerUser(this.registerUserData)
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
