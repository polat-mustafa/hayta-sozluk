import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchAllCategories = createAsyncThunk(
    "category/fetchCategories",
    async () => {
        const response = await axios.get("http://localhost:3000/categories");
        return response.data;
    }
);

const fetchCategoryById = createAsyncThunk(
    "category/fetchCategoryById",
    async (id) => {
        const response = await axios.get(`http://localhost:3000/categories/${id}`);
        return response.data;
    }
);



const initialState = {
    categories: [],
    category: {},
    status: "idle",
    error: null
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAllCategories.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchAllCategories.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.categories = state.categories.concat(action.payload);
        },
        [fetchAllCategories.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [fetchCategoryById.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchCategoryById.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.category = action.payload;
        },
        [fetchCategoryById.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
    }
});

export default categoriesSlice.reducer;