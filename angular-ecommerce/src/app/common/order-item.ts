import { CartItem } from "./cart-item";

export class OrderItem {

    productId: string;
    imageUrl: string;
    unitPrice: number;
    quantity: number;
    
    constructor(cartItem: CartItem) {
        this.productId = cartItem.id;
        this.imageUrl = cartItem.imageUrl;
        this.quantity = cartItem.quantity;
        this.unitPrice = cartItem.unitPrice;
    }
}
