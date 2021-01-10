import {Component, OnInit} from '@angular/core';
import {User} from './entity/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  opened=false;

  title = 'test-technique';
  listUsers:User[]=[];
  constructor() {
    document.body.style.background = 'rgba(100, 145, 175, 0.18)';
}
  ngOnInit(): void {

  }

  /*
  * @ToDo
  * */
  LoadListUsersFromJson(){}

  /*
  * @ToDo
  * */
  SaveListUsersInJson(){}
  toggleSidebar(){
    this.opened=  !this.opened;
  }
}
