import { createSlice } from "@reduxjs/toolkit";

type TinitialState = {
  activeStep: number;
};

const initialState: TinitialState = {
  activeStep: 0,
};

const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
  },
});

export const { setActiveStep } = stepperSlice.actions;

export default stepperSlice.reducer;
