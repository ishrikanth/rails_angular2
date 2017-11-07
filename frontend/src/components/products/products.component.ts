import {ViewEncapsulation, Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ProductService} from '../../services';
import {Product} from '../../models';
import {AutoGrowDirective} from '../../directives';

const templateUrl = require('./products.html');

@Component({
  moduleId: module.id,
  templateUrl: templateUrl,
  directives: [
    CORE_DIRECTIVES,
    AutoGrowDirective
  ],
  providers: [
    ProductService
  ]
})

export class ProductsComponent implements OnInit {
  products: Product[];
  totalCount: number = 0;

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._productService
      .fetchAll()
      .subscribe(d => {
        this.products = d.results;
        this.totalCount = d.totalCount;
      });
  }

  onDelete(id: string) {
    this._productService.deleleRow(id).subscribe();
    this.getProducts();
  }
}
