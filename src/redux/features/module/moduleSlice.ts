import { createSlice } from "@reduxjs/toolkit";

export type TModuleInitialState = {
  moduleId: string;
  title: string;
  newModule?: string;
};

const initialState: TModuleInitialState = {
  moduleId: "",
  title: "",
  newModule: "",
};

const moduleSlice = createSlice({
  name: "module",
  initialState,
  reducers: {
    setModule: (state, action) => {
      state.title = action.payload.title;
      state.moduleId = action.payload.moduleId;
    },
  },
});

export const { setModule } = moduleSlice.actions;
export default moduleSlice.reducer;
