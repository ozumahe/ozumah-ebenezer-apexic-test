export type Product = {
  product: string;
  serial: string;
  id: number;
  quantity: number;
  total: number;
};
interface InitialState {
  products: Product[];
}
const ProductsAction: string = "Products";

export default InitialState;
export { ProductsAction };
