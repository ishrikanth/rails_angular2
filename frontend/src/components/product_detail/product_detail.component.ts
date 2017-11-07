import {Component, OnInit} from 'angular2/core';
import {
FORM_DIRECTIVES,
CORE_DIRECTIVES,
FormBuilder,
ControlGroup,
Validators
} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {ProductFormComponent} from '../../components';
import {ProductService} from '../../services';
import {Product} from '../../models';

const templateUrl = require('./product_detail.html');

@Component({
  moduleId: module.id,
  templateUrl: templateUrl,
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    ProductFormComponent
  ],
  providers: [
    ProductService
  ]
})

export class ProductDetailComponent implements OnInit {
  id: string;
  form: ControlGroup;
  product: Product = new Product({});

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _productService: ProductService,
    fb: FormBuilder) {
    this.form = fb.group({
      'name': ['', Validators.required],
      'price': ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this._routeParams.get('id');
    this._productService
      .fetch(this.id)
      .subscribe(r => this.product = r);
  }

  onSubmit(): void {
    this._productService
      .update(this.id, this.product)
      .subscribe(_ => {
        this._router.navigate(['Products']);
      });
  }
}
