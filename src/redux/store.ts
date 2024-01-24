import { configureStore } from "@reduxjs/toolkit";
import stepperReducers from "./features/stepper/stepperSlice";
import moduleReducers from "./features/module/moduleSlice";
import quizReducers from "./features/quiz/quizSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    stepper: stepperReducers,
    module: moduleReducers,
    quiz: quizReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
