import axios from 'axios';
import { CategoryTypeProps } from '../types/categoryTypes';
import { ProductTypeProps } from '../types/productTypes';
import { AuthLoginProps } from '../types/AuthContextTypes';
import { CartTypeProps } from '../types/cartTypes';

const apiService = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000, 
  withCredentials: true,
});

const handleRequest = async <T>(request: Promise<{ data: T }>,functionName:string): Promise<T | null> => {
  try {
    const response = await request;  
    return response.data;
  } catch (error) {
    console.error(`API Error from ${functionName}:`, error);
    return null;
  }
};

export const fetchProducts = () => handleRequest<ProductTypeProps>(apiService.get("/product/complete"),'fetchProducts');

export const fetchCategories = () => handleRequest<CategoryTypeProps>(apiService.get("/category/complete"),"fetchCategories");

export const fetchProductDetails = (productId: string) => handleRequest<ProductTypeProps>(apiService.get(`/product/${productId}`), "fetchProductDetails");


export const fetchUser = async () => {  
  try {
    const response = await apiService.get('/auth/user', {
      withCredentials: true,      
    });       
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
};

export const fetchLogin = (email: string, password: string) => handleRequest<AuthLoginProps>(apiService.post("/auth/login", { email, password }), "fetchLogin");

export const fetchRefreshToken = () =>  handleRequest<AuthLoginProps>( apiService.post("/auth/refresh", {}, { withCredentials: true }), "refreshToken");

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

export const fetchCart = () => handleRequest<CartTypeProps>( apiService.get("/cart/", { withCredentials: true }), "fetchCart" );

export const addItemToCart = async (customerId: string, item: { productId: string; quantity: number }) => {
  try {
    const response = await apiService.post(
      `/cart/${customerId}/add`,
      item,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return null
  }
};


export default apiService;
