import { CartItem } from './cart-item';
export class OrderItem {
  imageUrl: string;
  unitPrice: number;
  quantity: number;
  productId: number;

  constructor(cartItem: CartItem) {
    //read the values from cartItem and assign to this order item

    this.imageUrl = cartItem.imageUrl;
    this.quantity = cartItem.quantity;
    this.unitPrice = cartItem.unitPrice;
    this.productId = cartItem.id;
  }
}
