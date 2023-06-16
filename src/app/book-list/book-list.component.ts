import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksService } from '../books.service';

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
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  bookList$: any;
  constructor(private http: HttpClient,private booksService: BooksService) {}

  ngOnInit() {
    this.bookList$ = this.booksService.getBooks();
  }
  deleteGetBook(id: string) {
    this.bookList$ = this.booksService.deleteGetBook(id);
  }

  trackByFn(index: number, mv: Book) {
    return mv.id;
  }

}
