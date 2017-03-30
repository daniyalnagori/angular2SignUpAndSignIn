import { Component, OnInit } from '@angular/core';
import {AngularFire,AuthProviders,AuthMethods} from 'angularfire2'
declare var alert: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private af:AngularFire) { 
  }
  ngOnInit() {
  }

}