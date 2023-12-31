import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  addBookForm = this.fb.group({
    image:['',Validators.required],
    title: ['', Validators.required],
    author: ['', [Validators.required]],
    summary:['',Validators.required],
    category: ['', [Validators.required]],
    publication_date: ['', [Validators.required]],
    status: ['', [Validators.required]],
    rating:['',Validators.required]
  });
  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private router: Router
  ) {}

  onSubmit() {
    console.log(this.addBookForm.status);

    if (this.addBookForm.valid) {
      const newBook = this.addBookForm.value;
      console.log(newBook);
      this.booksService.addBook(newBook as any).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }
  get image() {
    return this.addBookForm.get('image');
  }
  get title() {
    return this.addBookForm.get('title');
  }
  get author() {
    return this.addBookForm.get('author');
  }

  get category() {
    return this.addBookForm.get('category');
  }
  get summary() {
    return this.addBookForm.get('summary');
  }

  get publication_date() {
    return this.addBookForm.get('publication_date');
  }
  get rating() {
    return this.addBookForm.get('rating');
  }

  get status() {
    return this.addBookForm.get('status');
  }

}
