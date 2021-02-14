import { Component, OnInit } from '@angular/core';
import { faBook, faUserFriends, faVrCardboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faUserFriends = faUserFriends;
  faVrCardboard = faVrCardboard;
  faBook = faBook;

  constructor() { }

  ngOnInit(): void {
  }

  launch() {
    window.open("https://playcanv.as/b/liYgfXpQ/");
  }
}
