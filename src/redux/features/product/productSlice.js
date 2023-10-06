import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    completeBuild: false
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        setCompleteBuild: (state, action) => {
            state.completeBuild = action.payload
        },
    },
});

export const { addProduct, setCompleteBuild } = productSlice.actions;
export default productSlice.reducer;
