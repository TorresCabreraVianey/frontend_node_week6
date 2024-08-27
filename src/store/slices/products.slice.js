import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const urlBase = 'https://entregable-ecommerce-tcv.onrender.com/api/v1';

const products = createSlice({
    name: 'products',
    initialState: null,
    reducers : {
        setProducts: (_state, action) => action.payload,
    }
});

export const {setProducts} = products.actions;
export default products.reducer;

export const getProductsThunk = () => (dispatch) =>{
    const url = `${urlBase}/products`;
    axios.get(url)
        .then(res => dispatch(setProducts(res.data)))
        .catch(err => console.log(err));
}