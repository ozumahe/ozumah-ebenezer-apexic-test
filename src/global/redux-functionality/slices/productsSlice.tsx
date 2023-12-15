import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import InitialState, {
  Product,
  ProductsAction,
} from "../../types/redux/products";
import apiCall from "../../utils/axois";
import { toast } from "react-toastify";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await apiCall("GET", `/data/PRODUCTS.json`);

    return response.data;
  }
);

export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (searchValue: string, { rejectWithValue }) => {
    try {
      const response: any = await apiCall("GET", `/data/PRODUCTS.json`);

      const results: Product[] = response.data?.filter((product: Product) =>
        product.product.toLowerCase().includes(searchValue.toLowerCase())
      );

      if (results.length > 0) {
        return results;
      } else {
        toast("No product found");
      }
    } catch (error) {
      rejectWithValue({});
    }
  }
);

const initialState: InitialState = {
  loading: false,
  isProductDetailsOpen: false,
  searchValue: "",
  selectedProduct: null,
  products: [],
};

export const counterSlice = createSlice({
  name: ProductsAction,
  initialState: initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
    },
    setIsProductDetailsOpen: (state, action: PayloadAction<boolean>) => {
      state.isProductDetailsOpen = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },

  extraReducers(builder) {
    // Get Products
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
      state.products = [];
    });
    builder.addCase(getProducts.rejected, (state, action: any) => {
      state.products = [];
      state.loading = true;
      toast("Wow so easy!");
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });

    // Search Products
    builder.addCase(searchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchProducts.rejected, (state, action: any) => {
      state.loading = true;
      // TODO : ERROR MESSAGE
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.products = action.payload ? action.payload : state.products;
      state.loading = false;
    });
  },
});

export const { setIsProductDetailsOpen, setSelectedProduct, setSearchValue } =
  counterSlice.actions;
export default counterSlice.reducer;
