import {ViewEncapsulation, Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ProductService} from '../../services';
import {Product} from '../../models';

@Component({
  moduleId: module.id,
  directives: [
    CORE_DIRECTIVES
  ],
  providers: [
    ProductService
  ]
})
export class ProductDeleteComponent {
  constructor(private _productService: ProductService) {
  }

  onDelete(id: string) {
    this._productService.deleleRow(id);
  }
}
