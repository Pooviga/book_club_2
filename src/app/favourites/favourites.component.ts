import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { BooksService } from '../books.service';
interface Book {
  id: string;
  title: string;
  author: string;
  category: number;
  summary: string;
  publication_date: string;
  status: string;
  rating: string;
}
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient, private booksService: BooksService) {}
  list$: any;

  ngOnInit() {
    this.list$ = this.http
      .get('https://648a953b17f1536d65e94f3c.mockapi.io/movies')
      .pipe(catchError((err) => []));
  }
  trackByFn(index: number, mv: Book) {
    return mv.id;
  }
  deleteGetBook_fav(id: string) {
    this.list$ = this.booksService.deleteGetBook_fav(id);
  }
}
