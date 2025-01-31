import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:3000/api', // Update this with your actual API base URL
  timeout: 10000, // Set a timeout for requests
});

export const fetchProducts = async () => {
  try {
    const response = await apiService.get('/product/complete');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchCategories = async () => {
    try {
        const response = await apiService.get('/category/complete');               
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};


export const fetchProductDetails = async (productId: string) => {
  try {
    const response = await apiService.get(`/product/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for product ${productId}:`, error);
    throw error;
  }
};

export default apiService;
