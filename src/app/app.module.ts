import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgIf } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { Routes, RouterModule } from '@angular/router';
import { BookCardComponent } from './book-card/book-card.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditBookDetailsComponent } from './edit-book-details/edit-book-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { RatingComponent } from './rating/rating.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FavCardComponent } from './fav-card/fav-card.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books_add', component: AddBookComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'books/edit/:id', component: EditBookDetailsComponent },
  { path: 'books_fav', component: FavouritesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // {path:'**',component}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditBookComponent,
    BookCardComponent,
    BookListComponent,
    AddBookComponent,
    BookDetailsComponent,
    EditBookDetailsComponent,
    RatingComponent,
    FavouritesComponent,
    FavCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
  ],
  // providers: [{provide: ErrorStateMatcher}],
  bootstrap: [AppComponent],
})
export class AppModule {}
