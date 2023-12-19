import ProductsListComponent from './components/productsListComponent';

const productsList = new ProductsListComponent();
/**
  |============================
  | Use this methods to filter results
  |============================
*/
// productsList.page = 2;
// productsList.keyword = 'Almond';
// productsList.sortField = 'byPrice';
// productsList.sortFieldValue = true;

const getFoodProducts = async () => {
  try {
    // Get Products List
    const products = await productsList.getProducts();
    console.log(
      '🚀 ~ file: index.js:13 ~ getFoodProducts ~ products:',
      products
    );

    // Get Product by ID
    const product = await productsList.getProductById(
      products.results.pop()._id
    );
    console.log('🚀 ~ file: index.js:19 ~ getFoodProducts ~ product:', product);

    // Get Categories
    const categories = await productsList.getProductsCategories();
    console.log(
      '🚀 ~ file: index.js:23 ~ getFoodProducts ~ categories:',
      categories
    );

    // Get Products by category
    productsList.category = categories.pop();
    const productsByCategory = await productsList.getProducts();
    console.log(
      '🚀 ~ file: index.js:33 ~ getFoodProducts ~ productsByCategory:',
      productsByCategory
    );
  } catch (error) {
    console.log('🚀 ~ file: index.js:10 ~ getProducts ~ error:', error);
  }
};

getFoodProducts();
