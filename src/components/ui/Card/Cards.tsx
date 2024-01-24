import { Card, CardBody } from "@material-tailwind/react";
import { ReactNode } from "react";

const Cards = ({ children }: { children: ReactNode }) => {
  return (
    <Card className="mt-6 w-96" placeholder={""}>
      <CardBody placeholder={""}>{children}</CardBody>
    </Card>
  );
};

export default Cards;
