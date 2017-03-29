import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from '@angular/material';
import { AngularFireModule,AuthMethods,AuthProviders } from 'angularfire2';
import { AppService } from './services/app.service';
import { SigninComponent } from './signin/signin.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuardService} from './services/authGuard';
export const firebaseConfig = {
  apiKey: "AIzaSyBFbkzLMSqt4HDAGU_pyQGFhd3ptryoluk",
  authDomain: "webrtc2-e4e87.firebaseapp.com",
  databaseURL: "https://webrtc2-e4e87.firebaseio.com",
  storageBucket: "webrtc2-e4e87.appspot.com",
  messagingSenderId: "611425138270"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

const routesConfig = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] }
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NavComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig),
    RouterModule.forRoot(routesConfig)
  ],
  providers: [AppService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
