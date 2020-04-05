import { Product } from './product.model';

export interface OrderProduct {
	product: Product,
	quantity: number
}