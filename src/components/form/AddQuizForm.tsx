import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useAppSelector } from "../../redux/hook";

export function AddQuizForm() {
  const { title: moduleTitle } = useAppSelector((state) => state.module);
  return (
    <Card placeholder={""} color="transparent" shadow={false}>
      <Typography placeholder={""} variant="h4" color="blue-gray">
        {moduleTitle}
      </Typography>
      <Typography placeholder={""} color="gray" className="mt-1 font-normal">
        Please Add Your Quiz Here
      </Typography>
      <form className="mt-8 mb-2  w-full mx-auto ">
        <div className="mb-1 grid grid-cols-2 gap-6">
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="mb-3"
            >
              Question <span className="text-red-500">*</span>
            </Typography>
            <Input
              value={"Option 1"}
              crossOrigin={""}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="mb-3"
            >
              Description
            </Typography>
            <Input
              value={"Option 2"}
              crossOrigin={""}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="mb-3"
            >
              Description
            </Typography>
            <Input
              value={"Option 3"}
              crossOrigin={""}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="mb-3"
            >
              Description
            </Typography>
            <Input
              value={"Option 4"}
              crossOrigin={""}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button placeholder={""}>Add Quiz</Button>
        </div>
      </form>
    </Card>
  );
}
