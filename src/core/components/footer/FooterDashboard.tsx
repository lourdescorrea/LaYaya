import { en } from "yaya/shared";
import { Typography } from "../typography";

export const FooterDashboard = () => {
  return (
    <div className="flex h-10 w-full flex-col items-center justify-between px-1 lg:px-8 xl:flex-row">
      <Typography
        variant="muted"
        className="mb-4 text-center font-semibold sm:!mb-0"
      >
        {en.footer.copy_right_temp(new Date().getFullYear())}
      </Typography>
    </div>
  );
};
