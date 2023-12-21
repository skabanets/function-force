import axios from 'axios';

const foodAPI = axios.create({
  baseURL: 'https://food-boutique.b.goit.study/api',
});

/**
  |============================
  | PRODUCTS API
  |============================
*/
// Get Products by params
export const getProducts = async params => {
  const { sort, ...configParams } = params;
  const response = await foodAPI.get('/products', {
    params: { ...configParams, [sort.field]: sort.value },
  });

  return response.data;
};

// Get Popular products
export const getPopularProducts = async limit => {
  const response = await foodAPI.get('/products/popular', {
    params: { limit },
  });

  return response.data;
};

// Get Discounted Products
export const getDiscountedProducts = async () => {
  const response = await foodAPI.get('/products/discount');

  return response.data;
};

// Get Products' Categories
export const getProductsCategories = async () => {
  const response = await foodAPI.get('/products/categories');
  return response.data;
  
};

// Get Product by ID
export const getProductById = async id => {
  const response = await foodAPI.get(`/products/${id}`);

  return response.data;
};

/**
  |============================
  | ORDERS API
  |============================
*/
// Create a new order
export const createOrder = async (email, products) => {
  const response = await foodAPI.post('/orders', {
    params: { email, products },
  });

  return response.data;
};

/**
  |============================
  | SUBSCRIPTION API
  |============================
*/
// Create a new subscription
export const createSubscription = async email => {
  const response = await foodAPI.post('/subscription', { params: { email } });

  return response.data;
};
