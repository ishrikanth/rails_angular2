import {Component,OnInit} from 'angular2/core';
import{
FORM_DIRECTIVES,
CORE_DIRECTIVES,
FormBuilder,
Validators,
ControlGroup
} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {BookFormComponent} from '../../components';
import {BookService} from '../../services';
import {Book} from '../../models';

const templateUrl = require('./book_edit.html');

@Component({
  moduleId: module.id,
  templateUrl: templateUrl,
  directives: [
    FORM_DIRECTIVES,
    CORE_DIRECTIVES,
  ],
  providers:[
    BookService
  ]
})

export class BookDetailComponent implements OnInit{
  id: string;
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

  ngOnInit() :void{
    this.id = this._routeParams.get('id');
    this._bookService.
    fetch(this.id).
    subscribe(r => this.book = r);
  }
  onSubmit() : void{
    this._bookService.update(this.id,this.book).
    subscribe(_ =>{
      this._router.navigate(['Books']);
    });
}
}
