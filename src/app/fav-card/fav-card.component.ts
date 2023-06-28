import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Book } from '../book-list/book-list.component';

@Component({
  selector: 'app-fav-card',
  templateUrl: './fav-card.component.html',
  styleUrls: ['./fav-card.component.css'],
})
export class FavCardComponent {
  @Input() book = {
    id: '1',
    image: '',
    title: 'The India Story',
    author: 'Bimal Jalal',
    category: 'Classic',
    summary: '',
    publication_date: '2011',
    status: 'Currently Reading',
    rating: '',
  };
  @Output() delete = new EventEmitter<string>();
  constructor(private router: Router, private http: HttpClient) {}

  show = true;
  toggleSummary() {
    this.show = !this.show;
  }
  data: any;
  final_data: any;
  delBook(id: string) {
    this.delete.emit(id);
  }
  goToDetails(id: string) {
    this.router.navigate([`/books/${id}`]);
  }
  editBook(id: string) {
    this.router.navigate([`/books/edit/${id}`]);
  }
  add(id: string) {
    this.http
      .get<Book>(`https://648a953b17f1536d65e94f3c.mockapi.io/book_club/${id}`)
      .pipe(catchError((err) => []))
      .subscribe((val) =>
        this.http
          .post('https://648a953b17f1536d65e94f3c.mockapi.io/movies', val)
          .pipe(catchError((err) => []))
          .subscribe((b) => (this.final_data = b))
      );
  }
}
