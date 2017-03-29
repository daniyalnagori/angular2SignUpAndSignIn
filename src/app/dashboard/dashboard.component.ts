import { Component, OnInit } from '@angular/core';
import {AppService} from '../services/app.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private appService: AppService) { }
logout(){
  this.appService.logout();
}
  ngOnInit() {
  }

}
