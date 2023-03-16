const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/${VERSION}/auth/login`,
    profile: `${API}/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/${VERSION}/products/${id}/`,
    getProducts: (limit, offset) =>
      `${API}/${VERSION}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API}/${VERSION}/products`,
    updateProducts: (id) => `${API}/${VERSION}/products/${id}/`,
    deleteProducts: (id) => `${API}/${VERSION}/products/${id}/`,
  },
  categories: {
    getCategorieslist: `${API}/${VERSION}/categories/`,
    addCategory: `${API}/${VERSION}/categories/`,
    getCategoriesItems: (id) =>
      `${API}/${VERSION}/categories/${id}/products/`,
    updateCategorieItems: (id) => `${API}/${VERSION}/categories/${id}/`,
  },
  files: {
    addImage: `${API}/${VERSION}/files/upload/`,
  },
};

export default endPoints;
