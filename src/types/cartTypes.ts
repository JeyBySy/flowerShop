export interface CartContextType {
    cart: CartType | null;
    loading: boolean;
    selectedCarts: string[];
    setSelectedCarts: React.Dispatch<React.SetStateAction<string[]>>;
    // addToCart: (item: CartItemType) => void;
}

export interface CartItemType {
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

export interface CartType {
    id: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    CartItems: CartItemType[];
}

export interface CartTypeProps{
    success: boolean,
    message: string
    data: CartType,
}