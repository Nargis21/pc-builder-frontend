import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // cpu: null,
    // motherboard: null,
    // ram: null,
    // powerSupply: null,
    // storageDevice: null,
    // monitor: null
    products: []
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // setCpu: (state, action) => {
        //     state.cpu = action.payload;
        // },
        // setMotherboard: (state, action) => {
        //     state.motherboard = action.payload;
        // },
        // setRam: (state, action) => {
        //     state.ram = action.payload;
        // },
        // setPowerSupply: (state, action) => {
        //     state.powerSupply = action.payload;
        // },
        // setStorageDevice: (state, action) => {
        //     state.storageDevice = action.payload;
        // },
        // setMonitor: (state, action) => {
        //     state.monitor = action.payload;
        // }
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
    },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
