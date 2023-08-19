import { en } from "yaya/shared";
import { Typography } from "../typography";

export const FooterAuth = () => {
  return (
    <div className="z-[5] mx-auto flex w-full max-w-screen-sm flex-col items-center justify-between px-[20px] pb-4 lg:mb-6 lg:max-w-[100%] lg:flex-row xl:mb-2 xl:w-[1310px] xl:pb-6">
      <Typography
        variant="muted"
        className="mb-4 text-center font-semibold sm:!mb-0"
      >
        {en.footer.copy_right_temp(new Date().getFullYear())}
      </Typography>
    </div>
  );
};
