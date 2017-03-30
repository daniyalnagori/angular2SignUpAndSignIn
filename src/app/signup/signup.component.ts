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
  netCableSignUp: FormGroup;
  constructor(fb: FormBuilder, private appService: AppService) {
    // reactive form validation
    this.netCableSignUp = fb.group({
      'email': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }
  netCableSignupFormSubmit(value) {
    this.appService.signUpForm(value)
    this.netCableSignUp.reset();
  }
  ngOnInit() {
  }


}