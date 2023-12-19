import * as foodAPI from '../api';
import * as localStorage from '../storage';

class ProductsListComponent {
  #keyword;
  #category;
  #page;
  #limit;
  #sortField;
  #sortFieldValue;

  /**
    |============================
    | Constructor
    |============================
  */
  constructor({
    keyword,
    category,
    page = 1,
    limit = 6,
    sortField = 'byABC',
    sortFieldValue = true,
  } = {}) {
    // Get settings from Local Storage
    const localSettings = localStorage.getItem('productsListSettings');
    // Get default settings
    const defaultSettings = {
      keyword: keyword ?? null,
      category: category ?? null,
      page,
      limit,
      sort: {
        field: sortField,
        value: sortFieldValue,
      },
    };
    // Override default settings by settings from Local Storage
    const settings = {
      ...defaultSettings,
      ...localSettings,
    };

    // Update Object properties
    this.#keyword = settings.keyword;
    this.#category = settings.category;
    this.#page = settings.page;
    this.#limit = settings.limit;
    this.#sortField = settings.sort.field;
    this.#sortFieldValue = settings.sort.value;
    // Update Local Storage
    localStorage.setItem('productsListSettings', settings);
  }

  /**
    |============================
    | Getters and setters
    |============================
  */
  // Keywords
  get keyword() {
    return this.#keyword;
  }
  set keyword(keyword) {
    this.#keyword = keyword;
    this.#updateLocalStorage();
  }

  // Category
  get category() {
    return this.#category;
  }
  set category(category) {
    this.#category = category;
    this.#updateLocalStorage();
  }

  // Page
  get page() {
    return this.#page;
  }
  set page(page) {
    this.#page = page;
    this.#updateLocalStorage();
  }

  // Limit
  get limit() {
    return this.#limit;
  }
  set limit(limit) {
    this.#limit = limit;
    this.#updateLocalStorage();
  }

  // Sort Field
  get sortField() {
    return this.#sortField;
  }
  set sortField(sortField) {
    this.#sortField = sortField;
    this.#updateLocalStorage();
  }

  // Sort Field Value
  get sortFieldValue() {
    return this.#sortFieldValue;
  }
  set sortFieldValue(sortFieldValue) {
    this.#sortFieldValue = sortFieldValue;
    this.#updateLocalStorage();
  }

  /**
    |============================
    | Private methods
    |============================
  */
  #updateLocalStorage() {
    // Get Params
    const settings = this.#getSettings();
    // Update Local Storage
    localStorage.setItem('productsListSettings', settings);
  }

  #getSettings() {
    // Get params from Local Storage
    const localSettings = localStorage.getItem('productsListSettings');

    // Get Object params
    const settings = {
      keyword: this.#keyword,
      category: this.#category,
      page: this.#page,
      limit: this.#limit,
      sort: {
        field: this.#sortField,
        value: this.#sortFieldValue,
      },
    };

    return { ...localSettings, ...settings };
  }

  /**
    |============================
    | API methods
    |============================
  */
  async getProducts() {
    // Get Params
    const params = this.#getSettings();
    // Get Products
    const products = await foodAPI.getProducts(params);

    return products;
  }

  async getProductById(id) {
    // Get Product
    const product = await foodAPI.getProductById(id);

    return product;
  }

  async getProductsCategories() {
    // Get Categories
    const categories = await foodAPI.getProductsCategories();

    return categories;
  }

  /**
    |============================
    | Render function
    |============================
  */

  async renderHTML() {
    const products = await this.getProducts();

    return products.results.map(this.template).join('');
  }

  template(product) {
    return `<div><img src="${product.img}"><div><h3>${product.name}</h3></div></div>`;
  }
}

export default ProductsListComponent;
