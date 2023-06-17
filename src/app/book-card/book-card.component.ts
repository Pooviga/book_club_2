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
    image:"",
    title: "The India Story",
    author: "Bimal Jalal",
    category: "Classic",
    summary:'',
    publication_date: "2011",
    status: "Currently Reading"
  
  };
  @Output() delete = new EventEmitter<string>();
  constructor(private router: Router) {}

  show = true;

  toggleSummary() {
    this.show = !this.show;
  }

  delBook(id: string) {
    this.delete.emit(id);
  }
  goToDetails(id: string) {
    this.router.navigate([`/books/${id}`]);
  }
  editBook(id:string){
    this.router.navigate([`/books/edit/${id}`]);
  }
}
