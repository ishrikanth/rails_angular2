import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS, Http, Request, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Book} from '../models';

@Injectable()
export class BookService {
  constructor(private _http: Http) {
  }

  fetchAll() {
    return this._http
      .get('/api/books.json')
      .map(r => r.json())
      .map(r => {
        let results: Array<Book> = [];
        if (r.results) {
          results = r.results.map((v: any) => new Book(v));
        }
        return { totalCount: r.totalCount, results: results };
      });
  }

  fetch(id: string) {
    return this._http
      .get('/api/books/'+id+'.json')
      .map(r => r.json()).
       map(r => {
        return  new Book(r);
      });
  }

  update(id: string, book: Book){
    let param: { book: Book} = { 'book': book };
    return this._http.put('api/books/'+id+'.json',JSON.stringify(param));
  }


  create(book: Book) {
    console.log(book);
    let param: { book: Book} = { 'book': book };
    console.log(param);
    return this._http
      .post('/api/books/', JSON.stringify(param));
  }
}
