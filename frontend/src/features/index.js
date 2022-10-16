import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/index";
import postReducer from "./posts/index";
import categoryReducer from "./categories/index";

export const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer,
        category: categoryReducer
    },
  });