import { Component } from '@angular/core';
import { RedditCallService } from './reddit-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootlegReddit';

  constructor(private redditCall : RedditCallService){

  }
}
