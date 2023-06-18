import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksService } from '../books.service';
import { map } from 'rxjs';

export interface Book {
  id: string;
  title: string;
  author: string;
  category: number;
  summary:string;
  publication_date: string;
  status: string;
  rating: string;
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
      map((users: any[]) => {
        return users.filter(
          (user: any) =>
            user.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        );
      })
    );
  }
}
