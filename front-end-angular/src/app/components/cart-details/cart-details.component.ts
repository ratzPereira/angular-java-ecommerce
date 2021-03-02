import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0.0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {}

  listCartDetails() {
    this.cartItems = this.cartService.cartItems;

    //subscribe to totalPrice
    this.cartService.totalPrice.subscribe((data) => {
      this.totalPrice = data;
    });

    //subscribe to totalQuantity
    this.cartService.totalQuantity.subscribe((data) => {
      this.totalQuantity = data;
    });

    //compute cart total price and quantity
    this.cartService.computeCartTotals();
  }

  ngOnInit(): void {
    this.listCartDetails();
  }
}
