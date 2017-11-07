import {Component, OnInit} from 'angular2/core';
import {
FORM_DIRECTIVES,
CORE_DIRECTIVES,
FormBuilder,
ControlGroup,
Validators
} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {BookFormComponent} from '../../components';
import {BookService} from '../../services';
import {Book} from '../../models';

const templateUrl = require('./book_create.html');

@Component({
  moduleId: module.id,
  templateUrl: templateUrl,
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
    ],
  providers: [
    BookService
  ]
})

export class BookCreateComponent {
  form: ControlGroup;
  book: Book = new Book({});

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _bookService: BookService,
    fb: FormBuilder) {
    this.form = fb.group({
      'name': ['', Validators.required],
      'author': ['', Validators.required],
      'price': ['', Validators.required]
    });
  }

  onSubmit(): void {
    this._bookService
      .create(this.book)
      .subscribe(_ => {
        this._router.navigate(['Books']);
      });
  }
}
