import { Card, CardBody } from "@material-tailwind/react";
import { ReactNode } from "react";

const Cards = ({ children }: { children: ReactNode }) => {
  return (
    <Card className="mt-3 w-full" placeholder={""}>
      <CardBody placeholder={""}>{children}</CardBody>
    </Card>
  );
};

export default Cards;
