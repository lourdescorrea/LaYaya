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
    edit: (id: string) => `/admin/product/edit/${id}`,
  },
  sales: {
    root: "/admin/sales",
    create: "/admin/sales/create",
    // view: (id: string) => `/admin/sales/view/${id}`,
  },
  report: {
    root: "/admin/reports",
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
  {
    name: "Ventas",
    path: paths.sales.root,
    icon: <RxOverline className="h-6 w-6" />,
    allowedRoles: PERMISSIONS.ALL_ROLES,
  },
  {
    name: "Reportes",
    path: paths.report.root,
    icon: <RxOverline className="h-6 w-6" />,
    allowedRoles: PERMISSIONS.ALL_ROLES,
  },
];

export const defaultRoute = paths.brand.root;
