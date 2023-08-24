import { RxDashboard } from "react-icons/rx";
import { en, PERMISSIONS } from "yaya/shared";

export interface Route {
  name: string;
  path: string;
  icon: JSX.Element;
  allowedRoles: string[];
}

export const paths = {
  // TODO: REMOVE EXAMPLE
  example: {
    root: "/admin/example",
  },
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
    // TODO: REMOVE EXAMPLE
    name: en.navigation.example,
    path: paths.example.root,
    icon: <RxDashboard className="h-6 w-6" />,
    allowedRoles: PERMISSIONS.SUPER,
  },
  {
    // TODO: Add traducciones
    name: "Brand",
    path: paths.brand.root,
    icon: <RxDashboard className="h-6 w-6" />,
    allowedRoles: PERMISSIONS.SUPER,
  },
];

export const defaultRoute = paths.brand.root;
