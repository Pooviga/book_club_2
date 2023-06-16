import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // list:any;
  // users:any;
  // filteredUsers:any;
  // filterBy:any;
  // constructor(private http: HttpClient, private bookService: BooksService){}
  // movielist:any;.
  // // ngOnInit(){
  //   this.bookService.getBooks().subscribe(users => {
  //     this.users = users;
  //     this.filteredUsers = [...this.users];
  //   })
  // }

  // filter() {
  //   this.filteredUsers = [...this.users.filter((user: { title: string | any[]; }) => user.title.includes(this.filterBy))];
  // }

}
