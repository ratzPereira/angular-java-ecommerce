import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];

  //subject is a subclass of Observable . we use Subject to publish events in our code. the event will be sent do all of the subscribers
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  storage: Storage = sessionStorage;

  constructor() {
    //read from storage
    let data = JSON.parse(this.storage.getItem('cartItems'));

    if (data != null) {
      this.cartItems = data;

      //compute totals based on the data that is read from storage
      this.computeCartTotals();
    }
  }

  persistCartItems() {
    this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  addToCart(theCartItem: CartItem) {
    //check if we already have the item in our cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    //find the item in the cart based on item id
    if (this.cartItems.length > 0) {
      existingCartItem = this.cartItems.find(
        (tempCartItem) => tempCartItem.id === theCartItem.id
      );
      //check if we found it
      alreadyExistsInCart = existingCartItem != undefined;
    }

    if (alreadyExistsInCart) {
      existingCartItem.quantity++;
    } else {
      //just add the item to array
      this.cartItems.push(theCartItem);
    }
    //compute cart total price and total quantity
    this.computeCartTotals();
  }

  decrementQuantity(theCartItem: CartItem) {
    theCartItem.quantity--;

    if (theCartItem.quantity === 0) {
      this.remove(theCartItem);
    } else {
      this.computeCartTotals();
    }
  }

  remove(theCartItem: CartItem) {
    // get the index of the item in the array
    const itemIndex = this.cartItems.findIndex(
      (tempCartItem) => tempCartItem.id == theCartItem.id
    );

    //if found we remove it by the given index
    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }
  }

  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    //publish the new values.... all the subscribers will receive the new data    -> .next publish/send the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    //log cart data just for debugging purposes
    this.logCartData(totalPriceValue, totalQuantityValue);

    //persist cart data
    this.persistCartItems();
  }
  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    console.log(`Contents of the cart`);
    for (let tempCartItem of this.cartItems) {
      const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
      console.log(`Item name: ${tempCartItem.name} with ${tempCartItem.quantity} units with the price ${tempCartItem.unitPrice}!
       The subtotal will be: ${subTotalPrice}`);

      console.log(
        `totalPrice: ${totalPriceValue.toFixed(
          2
        )}, totalQuantity: ${totalQuantityValue}`
      );
      console.log(`-----------vv---------vv-----------------`);
    }
  }
}
