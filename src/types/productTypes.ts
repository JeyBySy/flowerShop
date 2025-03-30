export interface ProductRating {
  id: string
  rating: number
  review: string
  createdAt: string
  updatedAt: string
}

export interface ProductRatingsType extends ProductRating {
  User: {
    first_name: string,
    last_name: string
  }
  Product: {
    name: string
  }
}
export interface VarietyType {
  id:string,
  variety: string;
  price: number;
}

export interface ProductType {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
  price: string
  stock: number
  categoryId:string
  subCategoryId:string
  variants: VarietyType[]
  ProductRatings: ProductRatingsType[]
  averageRating: string
  totalSell:number
  discount:number
}

export interface ProductTypeProps {
  success: boolean,
  message: string,
  data: ProductType,
}

export interface ProductFormProps {
  data: ProductType,
  addToCartEvent:()=>void
}
