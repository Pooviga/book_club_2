import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book = {
    id: '1',
    title: "The India Story",
    author: "Bimal Jalal",
    category: "Classic",
    publication_date: "2011",
    status: "Currently Reading"
  
  };
  @Output() delete = new EventEmitter<string>();
  constructor(private router: Router) {}

  delBook(id: string) {
    // To parent component
    this.delete.emit(id);
  }
  // constructor(private router: Router) {}
  goToDetails(id: string) {
    this.router.navigate([`/books/${id}`]);
  }
  editBook(id:string){
    this.router.navigate([`/books/edit/${id}`]);
  }
}
