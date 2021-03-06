import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { AngularFire, AuthMethods, AuthProviders } from "angularfire2";
import { AppService } from "../services/app.service";
import { Router } from "@angular/router";
declare var alert: any;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForms: FormGroup;
  constructor(fb: FormBuilder, private af: AngularFire, private appService: AppService) {
    // reactive form
    this.myForms = fb.group({
      "email": ["", Validators.compose([Validators.required])],
      "password": ["", Validators.compose([Validators.required])],
    })
  }
  onSubmit(value) {
    this.appService.login(value.email, value.password);
    this.myForms.reset()
}
  loginWithGoogle() {
    this.appService.loginWithGoogle();
  }

  loginWithFacebook(){
  this.appService.loginWithFacebook();
}

  ngOnInit() {
  }

}