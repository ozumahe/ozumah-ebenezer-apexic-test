export type Product = {
  product: string;
  serial: string;
  id: number;
  quantity: number;
  total: number;
};
interface InitialState {
  loading: boolean;
  isProductDetailsOpen: boolean;
  searchValue: string;
  products: Product[];
  selectedProduct: Product | null;
}
const ProductsAction: string = "Products";

export default InitialState;
export { ProductsAction };
