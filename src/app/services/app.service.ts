import { Injectable } from "@angular/core";
import { AngularFire, AuthMethods, AuthProviders } from "angularfire2";
import { Router } from '@angular/router'
declare var alert: any;
@Injectable()

export class AppService {
    constructor(private af: AngularFire, private router: Router) {

    }
    signUpForm(value) {
        this.af.auth.createUser({ email: value.email, password: value.password }).then((successfull) => {
            alert("Successfull")
            this.router.navigate(['/signin'])
        }).catch((err) => {
            alert(err);
        })
    }
    login(email, password) {
        this.af.auth.login({ email: email, password: password },
            { provider: AuthProviders.Password, method: AuthMethods.Password })
            .then(successfull => {
                alert("Login Successfull");
                this.router.navigate(['/dashboard'])
            })
            .catch((err) =>
                alert("Error: " + err.message)
            )
    }
    loginWithGoogle() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup,
        }).then((successful) => {
            this.router.navigate(['/dashboard'])
        }).catch((err) => {
            alert('Errorr');
        })
    }
      loginWithFacebook(){
  this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then((successful) => {
            this.router.navigate(['/dashboard'])
        }).catch((err) => {
            alert('Errorr');
        })
  }
    logout() {
        this.af.auth.logout();
        this.router.navigate(['/signin']);
    }
}