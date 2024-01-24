import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Square3Stack3DIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Cards from "../Card/Cards";
import SelectModule from "../Select/SelectModule";
import { AddQuizForm } from "../../form/AddQuizForm";
import Stepper from "../Stepper/Stepper";

const steps = [
  {
    value: 0,
    name: "Select Module",
    component: <SelectModule />,
  },
  {
    value: 1,
    name: "Add Quiz",
    component: <AddQuizForm />,
  },
];

const data = [
  {
    label: "Quiz List",
    value: "quiz-list",
    icon: Square3Stack3DIcon,
    desc: (
      <Cards>
        <h2>hello list</h2>
      </Cards>
    ),
  },
  {
    label: "Add Quiz",
    value: "add-quiz",
    icon: UserCircleIcon,
    desc: (
      <Cards>
        <Stepper steps={steps} />
      </Cards>
    ),
  },
];

const Tabbar = () => {
  return (
    <Tabs value="quiz-list">
      <TabsHeader placeholder={""} className="mt-10">
        {data.map(({ label, value, icon }) => (
          <Tab placeholder={""} key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder={""}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default Tabbar;
