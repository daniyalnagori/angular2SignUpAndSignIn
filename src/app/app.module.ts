import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyBFbkzLMSqt4HDAGU_pyQGFhd3ptryoluk",
    authDomain: "webrtc2-e4e87.firebaseapp.com",
    databaseURL: "https://webrtc2-e4e87.firebaseio.com",
    storageBucket: "webrtc2-e4e87.appspot.com",
    messagingSenderId: "611425138270"
};

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
