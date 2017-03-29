import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
// import { AngularFire } from "angularfire2";
import { Router } from "@angular/router";
import { AppService } from "../services/app.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  companySignup: FormGroup;
  constructor(fb: FormBuilder, private appService: AppService) {
    this.companySignup = fb.group({
      'email': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }
  companySignupFormSubmit(value) {
    this.appService.signUpForm(value)
    this.companySignup.reset();
  }
  ngOnInit() {
  }


}