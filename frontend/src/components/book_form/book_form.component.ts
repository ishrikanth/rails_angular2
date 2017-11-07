import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES, ControlGroup} from 'angular2/common';
import {Book} from '../../models';

const templateUrl = require('./book_form.html');

@Component({
  moduleId: module.id,
  selector: 'book-form',
  inputs: ['book', 'form'],
  templateUrl: templateUrl,
  directives: [
    FORM_DIRECTIVES,
    CORE_DIRECTIVES
  ]
})

export class BookFormComponent {
  book: Book;
  form: ControlGroup;
}
