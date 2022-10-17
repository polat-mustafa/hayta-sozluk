import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/index";
import postReducer from "./posts/index";
import categoryReducer from "./categories/index";
import locationReducer from "./locations/index";

export const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer,
        category: categoryReducer,
        location: locationReducer
    },
  });