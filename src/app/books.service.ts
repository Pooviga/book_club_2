import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, concatMap } from 'rxjs';
import { Book } from './book-list/book-list.component';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http
      .get('https://648a953b17f1536d65e94f3c.mockapi.io/book_club')
      .pipe(catchError((err) => []));
  }

  addBook(data: Book) {
    return this.http
      .post('https://648a953b17f1536d65e94f3c.mockapi.io/book_club', data)
      .pipe(catchError((err) => []));
  }
  deleteBook(id: string) {
    console.log('Deleting... movie', id);
    return this.http
      .delete(`https://648a953b17f1536d65e94f3c.mockapi.io/book_club/${id}`)
      .pipe(catchError((err) => []));
  }
  deleteBook_fav(id: string) {
    console.log('Deleting... movie', id);
    return this.http
      .delete(`https://648a953b17f1536d65e94f3c.mockapi.io/movies/${id}`)
      .pipe(catchError((err) => []));
  }

  deleteGetBook(id: string) {
    return this.deleteBook(id).pipe(concatMap(() => this.getBooks()));
  }
  deleteGetBook_fav(id: string) {
    return this.deleteBook_fav(id).pipe(concatMap(() => this.getBooks()));
  }

  getBookById(id: string) {
    return this.http
      .get<Book>(`https://648a953b17f1536d65e94f3c.mockapi.io/book_club/${id}`)
      .pipe(catchError((err) => []));
  }
  updateBook(id: string, book: Book) {
    return this.http
      .put<any>(
        `https://648a953b17f1536d65e94f3c.mockapi.io/book_club/${id}`,
        book
      )
      .pipe(catchError((err) => []));
  }
  filtersearch(event: any) {
    return this.http

      .get(`https://648a951417f1536d65e94e7c.mockapi.io/book_club/`)

      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }
}
