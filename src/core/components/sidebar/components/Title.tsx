import { APP_NAME } from "../../../configs";
import { Divider } from "../../divider";
import { Typography } from "../../typography";

export const Title = () => {
  return (
    <>
      <div className="my-6 flex w-full flex-col items-center justify-center">
        <Typography
          variant="p"
          className="text-center font-poppins text-[26px] font-bold uppercase text-white"
        >
          {APP_NAME}
        </Typography>
      </div>
      <Divider className="mb-6 h-px" />
    </>
  );
};
