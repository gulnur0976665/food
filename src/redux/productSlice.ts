import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../types/Types";

interface ProductState {
  product: IProduct[];
  value: string;
  modal: boolean;
}

const initialState: ProductState = {
  product: JSON.parse(localStorage.getItem("product") || "[]"),
  value: localStorage.getItem("value") || "",
  modal: JSON.parse(localStorage.getItem("modal") || "false"),
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProduct: (state, action: PayloadAction<IProduct>) => {
      state.product.push(action.payload);
      localStorage.setItem("product", JSON.stringify(state.product));
    },
    setActiveButton: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      localStorage.setItem("value", JSON.stringify(state.value));
    },
    setModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
      localStorage.setItem("modal", JSON.stringify(state.modal));
    },
  },
});

export const { createProduct, setActiveButton, setModal } =
  productSlice.actions;
export default productSlice.reducer;
