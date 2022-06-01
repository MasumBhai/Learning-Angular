import { Component } from '@angular/core';
import {UsersDataService} from "./service/users-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:any;
  title = 'Learning-Angular';
  constructor(private userData:UsersDataService) {
    this.userData.users().subscribe((data) => {
      console.warn("data",data)
      this.users = data
    })
  }
}
