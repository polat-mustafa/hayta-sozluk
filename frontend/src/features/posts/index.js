import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

export const fetchAllPosts = createAsyncThunk(
    "posts/fetchAllPosts",
    async () => {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        return data;
    }
);

export const fetchPostById = createAsyncThunk(
    "posts/fetchPostById",
    async (id) => {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        const data = await response.json();
        return data;
    }
);

const initialState = {
    posts: [],
    post: {},
    status: "idle",
    error: null
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAllPosts.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchAllPosts.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.posts = state.posts.concat(action.payload);
        },
        [fetchAllPosts.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [fetchPostById.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchPostById.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.post = action.payload;
        },
        [fetchPostById.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
    }
});

export default postsSlice.reducer;