import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditCallService {

  constructor(private HttpService : HttpClient) {

   }

   getPost(subreddit){
     return this.HttpService.get(`https://www.reddit.com/r/${subreddit}/.json`);
   }
}
