import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { Product } from '../../models/product'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [],
})
export class ProductComponent implements OnInit {
  private product: Observable<Product>

  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.product = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.loadProduct(+params.get('id'))),
    )
  }

  private loadProduct(id: number) {
    return this
      .productService
      .findProduct(id)
  }
}
