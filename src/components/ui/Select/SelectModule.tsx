import { Select, Option } from "@material-tailwind/react";

const SelectModule = () => {
  return (
    <div className="w-72">
      <Select placeholder={""} label="Select Version">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    </div>
  );
};

export default SelectModule;