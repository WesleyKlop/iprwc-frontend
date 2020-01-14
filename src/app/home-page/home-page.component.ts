import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [],
})
export class HomePageComponent implements OnInit {
  private readonly products: Product[] = [];

  constructor() {
    this.products.push(
      {
        id: 1,
        title: 'Daymm son',
        description: 'Where did you find this',
        file: { id: 1, path: 'https://images.unsplash.com/photo-1574422834548-a56c75424a5f' },
      },
      {
        id: 2,
        title: 'Cool hoor',
        description: 'Where did you find this',
        file: { id: 2, path: 'https://images.unsplash.com/photo-1568121581570-a30e94219113' },
      },
    );
  }

  ngOnInit() {
  }

}
