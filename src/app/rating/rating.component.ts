import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  likes=0;
  dislikes=0;
  hidden1=false;
  hidden2=false
  increment_likes(){
    this.likes++;
    // this.hidden1 = !this.hidden1;
  }
  decrement_likes(){
    this.dislikes++;
    // this.hidden2 = !this.hidden2;
  }
}
