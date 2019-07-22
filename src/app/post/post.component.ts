import { Component, OnInit } from '@angular/core';
import { RedditCallService } from '../reddit-call.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postsArray : Object[] = [];
  postObject : Object[] = [];
  imageData : string;
  subreddit : string;



  constructor(private redditCall : RedditCallService) {

   }

   getPost() {
     this.postsArray = [];
    this.redditCall.getPost(this.subreddit).subscribe((e: any) => {
      console.log(e);
      //let postsArray : Object[] = [];
      for (let i = 1; i < 11; i++) {
        let postObject = {
          title: e.data.children[i].data.title,
          thumbnail: e.data.children[i].data.thumbnail,
          link: `https://www.reddit.com/${e.data.children[i].data.permalink}`,
          votes: e.data.children[i].data.ups,
        }
        this.postsArray.push(postObject);
        if (this.postsArray.length < 1){
          this.postsArray.push(`No results for the subreddit ${this.subreddit}`);
          console.log("no results is working");
        }
      }
      console.log(this.postsArray);
    });
  }



  ngOnInit() {
    this.subreddit = "awww";
    this.redditCall.getPost(this.subreddit).subscribe((e: any) => {
      console.log(e);
      //let postsArray : Object[] = [];
      for (let i = 1; i < 11; i++) {
        let postObject = {
          title: e.data.children[i].data.title,
          thumbnail: e.data.children[i].data.thumbnail,
          link: `https://www.reddit.com/${e.data.children[i].data.permalink}`
        }
        this.postsArray.push(postObject);
      }
      console.log(this.postsArray);
    });
  }

}
