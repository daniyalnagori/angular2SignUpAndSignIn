import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
// import { AngularFire } from "angularfire2";
import { Router } from "@angular/router";
// import { AppService } from "../app.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  companySignup: FormGroup;
  constructor(fb: FormBuilder) {
    this.companySignup = fb.group({
      'email': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }
  companySignupFormSubmit(value) {
    console.log(value);
  }

  // onChange(value) {
  //   // this.company = true;
  //   console.log("dasdasdas", value);
  //   if (value === 'student') {
  //     this.student = true;
  //     this.company = false;
  //   }
  //   else if (value === "company") {
  //     this.company = true;
  //     this.student = false;
  //   }
  // }
  ngOnInit() {
  }


}