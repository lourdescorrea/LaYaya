import { RxOverline } from "react-icons/rx";
import { PERMISSIONS } from "yaya/shared";

export interface Route {
  name: string;
  path: string;
  icon: JSX.Element;
  allowedRoles: string[];
}

export const paths = {
  brand: {
    root: "/admin/brand",
  },
  notAuthorized: {
    root: "/admin/notAuthorized",
  },
};

export const authPaths = {
  login: "/auth",
  api: "/api/auth",
};

export const routes: Route[] = [
  {
    name: "Marcas",
    path: paths.brand.root,
    icon: <RxOverline className="h-6 w-6" />,
    allowedRoles: PERMISSIONS.SUPER,
  },
];

export const defaultRoute = paths.brand.root;
