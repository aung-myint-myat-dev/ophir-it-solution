import OurProducts from "../pages/our-products";
import ProductDetail from "../pages/product-detail";

export const OUR_PRODUCTS_ROUTES = {
  path: 'our-products',
  children: [
    {
      index: true,
      Component: OurProducts
    },
    {
      path: ':slug',
      Component: ProductDetail,
    }
  ]
}