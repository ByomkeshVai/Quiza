import React from "react";
import { Stepper as MTStepper, Step } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { setActiveStep } from "../../../redux/features/stepper/stepperSlice";

type StepperProps = {
  steps: {
    value: number;
    name: string;
    component: React.ReactNode;
  }[];
};

const Stepper = ({ steps }: StepperProps) => {
  const { activeStep } = useAppSelector((state) => state.stepper);
  const dispatch = useAppDispatch();
  return (
    <div className="w-full py-4 px-8">
      <MTStepper placeholder={""} activeStep={activeStep}>
        {steps.map(({ value, name }) => (
          <Step
            placeholder={""}
            key={value}
            className="w-fit px-4 cursor-pointer"
            onClick={() => dispatch(setActiveStep(value))}
          >
            {name}
          </Step>
        ))}
      </MTStepper>
    </div>
  );
};

export default Stepper;
