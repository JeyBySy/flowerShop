export interface CartContextType {
    cart: CartType | null;
    loadingCart: boolean;
    selectedCarts: string[];
    setSelectedCarts: React.Dispatch<React.SetStateAction<string[]>>;
    addToCart: (payload: CartAddItemType) => void;
    removeCart:(cartItemId:string)=>void
}
export interface CartAddItemType{
    cartId: string; 
    productId: string;  
    variety: VarietyType[]; 
    deliveryDate: string; 
    deliveryTime: string;
}

export interface CartAddItemProps{
    success: boolean,
    message: string
    data: CartItemType,
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

