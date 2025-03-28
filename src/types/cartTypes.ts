export interface CartType {
    id: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    CartItems: CartItemType[];
}

export interface CartItemType {
    id: string;
    cartId: string;
    productId: string;
    variants: VarietyType[];
    deliveryDate: string;
    deliveryTime: string;
    quantity: number;
    total: string;
    createdAt: string;
    updatedAt: string;
    Product: ProductType;
}

export interface VarietyType {
    id:string,
    variety: string;
    price: number;
}

export interface ProductType {
    id: string;
    name: string;
    price: string;
}
