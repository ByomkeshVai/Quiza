/* eslint-disable @typescript-eslint/no-explicit-any */
import { Option, Select, Spinner } from "@material-tailwind/react";
import { useGetAllModuleQuery } from "../../../redux/features/module/moduleApi";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { setActiveStep } from "../../../redux/features/stepper/stepperSlice";
import { setModule } from "../../../redux/features/module/moduleSlice";

const SelectModule = () => {
  const { data: module, isLoading } = useGetAllModuleQuery(undefined);
  const dispatch = useAppDispatch();
  const { title: moduleTitle } = useAppSelector((state) => state.module);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <Spinner color="blue" />
      </div>
    );
  }
  return (
    <div className="">
      <Select
        onChange={(moduleId) => {
          const title = module?.data?.find(
            (module: any) => module._id === moduleId
          )?.title;

          if (moduleId && title) {
            dispatch(
              setModule({
                title,
                moduleId,
              })
            );
          }
          dispatch(setActiveStep(1));
        }}
        placeholder={""}
        label="Select Module"
        value={moduleTitle}
      >
        {module?.data.map((module: any) => (
          <Option key={module._id} value={module._id}>
            {module.title}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectModule;
