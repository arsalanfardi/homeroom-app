import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homeroom-app';

  openTwitter() {
    window.open("https://www.twitter.com")
  }
}
