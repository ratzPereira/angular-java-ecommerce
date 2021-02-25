import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css'],
})
export class ProductCategoryMenuComponent implements OnInit {
  //1 define our property
  productCategories: ProductCategory[];

  //2 inject the service
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    //4 pass the method to our lifecicle method
    this.listProductCategories();
  }

  //3 create new method
  listProductCategories() {
    this.productService.getProductCategories().subscribe((data) => {
      console.log('Product List ' + JSON.stringify(data));
      //5 assign data to our property
      this.productCategories = data;
    });
  }
}
