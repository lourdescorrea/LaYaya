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
  product: {
    root: "/admin/product",
    create: "/admin/product/create",
    edit: (id: number) => `/admin/product/${id}`,
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
  {
    name: "Productos",
    path: paths.product.root,
    icon: <RxOverline className="h-6 w-6" />,
    allowedRoles: PERMISSIONS.ADMINS,
  },
];

export const defaultRoute = paths.brand.root;
