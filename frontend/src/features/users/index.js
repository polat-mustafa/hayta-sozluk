import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";


export const fetchAllUsers = createAsyncThunk(
    "users/fetchAllUsers",
    async () => {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        return data;
    }
);

export const fetchUserById = createAsyncThunk(
    "users/fetchUserById",
    async (id) => {
        const response = await fetch(`http://localhost:3000/users/${id}`);
        const data = await response.json();
        return data;
    }
);


const initialState = {
    users: [],
    user: {},
    posts: [],
    status: "idle",
    error: null
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAllUsers.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchAllUsers.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.users = state.users.concat(action.payload);
        },
        [fetchAllUsers.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [fetchUserById.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchUserById.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.user = action.payload;
        },
        [fetchUserById.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
    }
});

export default usersSlice.reducer;