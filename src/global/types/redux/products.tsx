export type Product = {
  product: string;
  serial: string;
  id: number;
  quantity: number;
  total: number;
};
interface InitialState {
  isProductDetailsOpen: boolean;
  products: Product[];
}
const ProductsAction: string = "Products";

export default InitialState;
export { ProductsAction };
