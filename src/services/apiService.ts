import axios from 'axios';
import { CategoryTypeProps } from '../types/categoryTypes';
import { ProductTypeProps } from '../types/productTypes';
import { AuthLoginProps,User } from '../types/AuthContextTypes';
import { CartAddItemProps, CartAddItemType, CartTypeProps } from '../types/cartTypes';
import { CheckoutTypeProps } from '../types/checkoutTypes';

const apiService = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000, 
  withCredentials: true,
});


const handleRequest = async <T>(request: Promise<{ data: T }>, functionName: string): Promise<T | null> => {
  try {
    const response = await request;     
    return response.data;
  } catch (error) { 
    if (axios.isAxiosError(error)) {
      console.error(`API Error from ${functionName}:`, error.response?.data || error.message);
    } else {
      console.error(`Unknown error from ${functionName}:`, error);
    }
    return null;
  }
};

// export const fetchSearchByCategory = async(categoryName:string, subCategoryName:string)=>{
//   try {
//     const categoryResponse = await apiService.get(`/search/category/name/${categoryName}`)    
//     const categoryData = categoryResponse.data

//     const subCategoryResponse = await apiService.get(`/search/subcategory/name/${subCategoryName}`)
//     const subCategoryData = subCategoryResponse.data

//     const response = await apiService.get(`/search/${categoryData.data.id}/${subCategoryData.data.id}`)       
    
//     return {data:response.data,subCategoryData}
    
//   } catch (error) {
//     console.error('Error fetching product base on category service');
//     return null
//   }
// }


// Cart
export const fetchCart = () => handleRequest<CartTypeProps>( apiService.get("/cart/", { withCredentials: true }), "fetchCart" );

export const fetchAddCartItem = ({ 
  cartId,
  productId,
  variety,
  deliveryDate,
  deliveryTime,
}:CartAddItemType) => {
  const payload = {
    cartId,
    productId,
    variety,
    deliveryDate,
    deliveryTime,
  };    
  
  return handleRequest<CartAddItemProps>( apiService.post("/cart/item/add",payload, { withCredentials: true }), "fetchAddCartItem")
}
export const fetchRemoveCartItem = (cartItemId:string)=> handleRequest<CartTypeProps>(apiService.delete(`/cart/items/${cartItemId}`,{withCredentials: true},), "fetchRemoveCartItem");


// Checkout
export const fetchCheckout = (cartId:string,cartItemIds:string[]) => handleRequest<CheckoutTypeProps>(apiService.post("/cart/checkout", { cartId,cartItemIds }, { withCredentials: true }), "fetchCheckout");

// Product
export const fetchProducts = () => handleRequest<ProductTypeProps>(apiService.get("/product/complete"),'fetchProducts');

export const fetchCategories = () => handleRequest<CategoryTypeProps>(apiService.get("/category/complete"),"fetchCategories");

export const fetchProductDetails = (productId: string) => handleRequest<ProductTypeProps>(apiService.get(`/product/${productId}`), "fetchProductDetails");


// Auth
export const fetchUser = () => handleRequest<User>(apiService.get('/auth/user', {withCredentials: true,}), "fetchUser")

export const fetchLogin = (email: string, password: string) => handleRequest<AuthLoginProps>(apiService.post("/auth/login", { email, password }), "fetchLogin");

export const fetchLogout = () =>  handleRequest<AuthLoginProps>(apiService.post("/auth/logout", {}, { withCredentials: true }),"fetchLogout");

export const fetchRefreshToken = () =>  handleRequest<AuthLoginProps>( apiService.post("/auth/refresh", { withCredentials: true }), "refreshToken");

// Search
export const fetchSearchByCategory = async (categoryName: string, subCategoryName: string, sortItems:string, limit:number,page:number) => {
  try {
    const categoryResponse = await apiService.get(`/search/category/name/${categoryName}`);
    const categoryData = categoryResponse.data;

    const subCategoryResponse = await apiService.get(`/search/subcategory/name/${subCategoryName}`);
    const subCategoryData = subCategoryResponse.data;

    const response = await apiService.get(`/search/${categoryData.data.id}/${subCategoryData.data.id}`,{ params: { sortItems, limit,page }})

    return {
      data: response.data.data,  // Extract only relevant data
      subCategory: subCategoryData.data,
    };

  } catch (error) {
    console.error('Error fetching product base on category service', error);
    return null
  }
};

export default apiService;
