import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
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

const routes: Routes=[
  {path :'home',component:HomeComponent},
  {path:'books',component:BookListComponent},
  { path: 'books_add', component: AddBookComponent },
  {path:'books/:id',component:BookDetailsComponent},
  {path: 'books/edit/:id',component:EditBookDetailsComponent},

  // {path:'**',component}
]

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
    

    // @NgModule({
    //   imports:      [ BrowserModule, FormsModule, HttpClientModule ],
    //   declarations: [ AppComponent, HelloComponent ],
    //   bootstrap:    [ AppComponent ]
    // })
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    // BrowserAnimationsModule,
    // MatButtonModule,
    // MatInputModule,
    // MatFormFieldModule,
    // MatBadgeModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
