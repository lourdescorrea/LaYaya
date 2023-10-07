import { BiPieChartAlt, BiShoppingBag } from "react-icons/bi";
import { MdOutlineShoppingCart, MdOutlineStorefront } from "react-icons/md";
import { PERMISSIONS, en } from "yaya/shared";

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
    name: en.navigation.brands,
    path: paths.brand.root,
    icon: <MdOutlineStorefront className="h-6 w-6" />,
    allowedRoles: PERMISSIONS.ADMINS,
  },
  {
    name: en.navigation.products,
    path: paths.product.root,
    icon: <BiShoppingBag className="h-6 w-6" />,
    allowedRoles: PERMISSIONS.ALL_ROLES,
  },
  {
    name: en.navigation.sales,
    path: paths.sales.root,
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    allowedRoles: PERMISSIONS.ALL_ROLES,
  },
  {
    name: en.navigation.reports,
    path: paths.report.root,
    icon: <BiPieChartAlt className="h-6 w-6" />,
    allowedRoles: PERMISSIONS.ADMINS,
  },
];

export const defaultRoute = paths.sales.root;
