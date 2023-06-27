import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-edit-book-details',
  templateUrl: './edit-book-details.component.html',
  styleUrls: ['./edit-book-details.component.css'],
})
export class EditBookDetailsComponent {
  addBookForm = this.fb.group({
    image: ['', Validators.required],
    title: ['', Validators.required],
    author: ['', [Validators.required]],
    category: ['', [Validators.required]],
    summary: ['', Validators.required],
    publication_date: ['', [Validators.required]],
    status: ['', [Validators.required]],
    rating: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  book: any;
  bookId: string = '';
  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
      this.bookId = route.get('id') as string;
      this.booksService.getBookById(this.bookId as string).subscribe((data) => {
        this.addBookForm.patchValue(data as any);
      });
    });
  }
  onSubmit() {
    console.log(this.addBookForm.status);

    if (this.addBookForm.valid) {
      const updateBook = this.addBookForm.value;

      console.log(updateBook);
      this.booksService
        .updateBook(this.bookId, updateBook as any)
        .subscribe(() => {
          this.router.navigate(['/books']);
        });
    }
  }
  get title() {
    return this.addBookForm.get('title');
  }
  get image() {
    return this.addBookForm.get('image');
  }
  get rating() {
    return this.addBookForm.get('rating');
  }
  get summary() {
    return this.addBookForm.get('summary');
  }
  get author() {
    return this.addBookForm.get('author');
  }

  get category() {
    return this.addBookForm.get('category');
  }

  get publication_date() {
    return this.addBookForm.get('publication_date');
  }

  get status() {
    return this.addBookForm.get('status');
  }
}
