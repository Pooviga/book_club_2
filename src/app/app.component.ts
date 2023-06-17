import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'book_club';
  x: any;
  myFunction() {
    this.x = document.getElementById('myTopnav');
    if (this.x.className === 'topnav') {
      this.x.className += ' responsive';
    } else {
      this.x.className = 'topnav';
    }
  }
  
}
