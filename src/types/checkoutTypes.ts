export interface VarietyType {
    variantId:string,
    name: string;
    price: number;
    quantity:number
}
export interface ProductType {
    id: string;
    name: string;
    price: string;
}

export interface CheckoutCartItemType {
    id: string;
    cartId: string;
    productId: string;
    variety: VarietyType[];
    deliveryDate: string;
    deliveryTime: string;
    quantity: number;
    total: string;
    createdAt: string;
    updatedAt: string;
    Product: ProductType;
}

export interface CheckoutTypeProps{
    success: boolean,
    message: string
    data: CheckoutCartItemType[],
}
