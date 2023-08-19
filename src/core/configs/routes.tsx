import { RxDashboard } from "react-icons/rx";
import { en } from "yaya/shared";

export interface Route {
  name: string;
  path: string;
  icon: JSX.Element;
}

export const paths = {
  example: {
    root: "/admin/example",
  },
};

export const authPaths = {
  login: "/auth",
  api: "/api/auth",
};

export const routes: Route[] = [
  {
    name: en.navigation.example,
    path: paths.example.root,
    icon: <RxDashboard className="h-6 w-6" />,
  },
];
