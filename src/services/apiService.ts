import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000, 
  withCredentials: true,
});

// // Request interceptor (Attach Authorization Header)
// apiService.interceptors.request.use(config => {
//   const accessToken = localStorage.getItem('accessToken');
//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// });

// // Response interceptor (Handle token refresh)
// apiService.interceptors.response.use(
//   response => response, 
//   async error => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true; // Prevent infinite loop

//       try {
//         const { data } = await axios.post('http://localhost:3000/api/auth/refresh', {}, { withCredentials: true });
//         localStorage.setItem('accessToken', data.accessToken); // Store new token

//         apiService.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
//         return apiService(originalRequest); // Retry failed request with new token
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       } catch (refreshError) {
//         console.error('Session expired. Please log in again.');
//         localStorage.removeItem('accessToken');
//         window.location.href = '/login'; // Redirect to login
//       }
//     }

//     return Promise.reject(error);
//   }
// );



export const fetchProducts = async () => {
  try {
    const response = await apiService.get('/product/complete');
    return response.data;
  } catch (error) {
    console.error('Error fetching products service:', error);
    throw error;
  }
};

export const fetchCategories = async () => {
    try {
        const response = await apiService.get('/category/complete');               
        return response;
    } catch (error) {
        console.error('Error fetching categories service:', error);
        throw error;
    }
};


export const fetchProductDetails = async (productId: string) => {
  try {
    const response = await apiService.get(`/product/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for product ${productId} service:`, error);
    throw error;
  }
};


export const fetchUser = async (token:string) => {  
  if (!token) {
    throw new Error('No token found. Please log in.');
  }
  try {
    const response = await apiService.get('/auth/user', {
      headers: { Authorization: `Bearer ${token}` },
    });    
    return response.data;
  } catch (error) {
    console.error('Error fetching user data service:');
    throw error;
  }
};

export const fetchLogin = async (email:string,password:string) => {  
  try {
    const response = await apiService.post('/auth/login',{ email, password });
    return response.data;
  } catch (error) {
    console.error('Error while Login service');
    throw error;
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
//     throw error;
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
    throw error;
  }
};

export default apiService;
