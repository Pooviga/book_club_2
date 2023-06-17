import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 

  // deleteMovie(id: any) {

  //   this.booklist$ = this.bookService.deleteBook(id);

  // }

  // filter() {
  //   this.filteredUsers = [...this.users.filter((user: { title: string | any[]; }) => user.title.includes(this.filterBy))];
  // }

}
