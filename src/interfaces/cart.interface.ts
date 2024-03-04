import { Product } from ".";

export interface ProductsCartStore {
    cart: Product[];
    addProductToCart: (product: Product) => void;
}