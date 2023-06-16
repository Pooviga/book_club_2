import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book:any;
  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
      const bookId = route.get('id');
      this.booksService.getBookById(bookId as string).subscribe((data) => { 
        this.book=(data); 
      });
    });
  }
}
