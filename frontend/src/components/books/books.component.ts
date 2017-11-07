import {ViewEncapsulation, Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {BookService} from '../../services';
import {Book} from '../../models';

const templateUrl = require('./books.html');

@Component({
  moduleId: module.id,
  templateUrl: templateUrl,
  directives: [
    CORE_DIRECTIVES
  ],
  providers: [
    BookService
  ]
})

export class BooksComponent {
  books: Book[];
  totalCount: number = 0;

  constructor(private _bookService: BookService) {
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this._bookService.
    fetchAll().
    subscribe(d => {
      this.books = d.results;
      this.totalCount = d.totalCount;
    });
  }
}
