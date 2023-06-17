import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksService } from '../books.service';
import { map } from 'rxjs';

export interface Book {
  id: string;
  title: string;
  author: string;
  category: number;
  publication_date: string;
  status: string;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  bookList$: any;
  users$: any;
  filteredUsers$: any;
  constructor(private http: HttpClient, private booksService: BooksService) {}

  ngOnInit() {
    this.bookList$ = this.booksService.getBooks();

    this.users$ = this.booksService.getBooks();

    // this.filteredUsers$ = this.users$;
  }
  deleteGetBook(id: string) {
    this.bookList$ = this.booksService.deleteGetBook(id);
  }

  trackByFn(index: number, mv: Book) {
    return mv.id;
  }
  filter(event: any) {
    this.bookList$ = this.booksService.filtersearch(event.target.value);

    this.bookList$ = this.users$.pipe(
      // the stream is of a single item that is of type array

      // map(user => user.name) would not work because it is not // a stream of items inside the array

      map((users: any[]) => {
        // inside the map we use the native Array.prototype.filter() method to filter down the results by name

        return users.filter(
          (user: any) =>
            user.title.toLowerCase().indexOf(event.target.value.toLowerCase()) >
            -1
        );
      })
    );

    // this.bookes$ = this.service.filtersearch(event.target.value);
  }
}
