import { createContext } from 'react';

interface Product {
  name: string;
  imageURL: string;
}

interface Cart {
  products: Product[];
  shippingValue?: number;
}

const CartContext = createContext<Cart>({
  products: [],
});

export default CartContext;
