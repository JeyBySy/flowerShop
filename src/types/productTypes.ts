export interface ProductRating {
  id: string
  rating: number
  review: string
  createdAt: string
  updatedAt: string
}

export interface ProductRatingsType extends ProductRating {
  User: {
    name: string
  }
  Product: {
    name: string
  }
}

export interface ProductType {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
  price: string
  stock: number
  variety: string[]
  ProductRatings: ProductRatingsType[]
  averageRating: string
  totalSell:number
  discount:number
}

export interface ProductProps {
  data: ProductType
}
