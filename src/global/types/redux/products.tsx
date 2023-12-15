export type Product = {
  product: string;
  serial: string;
  id: number;
  quantity: number;
  total: number;
  status: "excellent" | "flawed" | "impeccable" | "defective";
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
