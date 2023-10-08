import { ROLES } from "./roles";
import { SHOPS } from "./shops";

const DUARTE_USER = {
  id: "1",
  name: " Local Duarte",
  email: "duarte@yaya.com",
  password: "vdx3ehu@mvd_gak2RKE",
  role: ROLES.SELLER,
  shops: [SHOPS.DUARTE],
};

const COLON_USER = {
  id: "2",
  name: " Local Colón",
  email: "colon@yaya.com",
  password: "pyf!QWV@ubm8wqc*cma",
  role: ROLES.SELLER,
  shops: [SHOPS.COLON],
};

const ADMIN_USER = {
  id: "3",
  name: "Admin",
  email: "admin@yaya.com",
  password: "mbd@qfg3afa7YRC4mrq",
  role: ROLES.ADMIN,
  shops: [SHOPS.DUARTE, SHOPS.COLON, SHOPS.DEPOSIT],
};

const SUPER_ADMIN_USER = {
  id: "4",
  name: "Super Admin",
  email: "superadmin@yaya.com",
  password: "WFA8dxz-nfg-hja5yfk",
  role: ROLES.SUPER_ADMIN,
  shops: [SHOPS.DUARTE, SHOPS.COLON, SHOPS.DEPOSIT],
};

export const USERS = {
  DUARTE_USER,
  COLON_USER,
  ADMIN_USER,
  SUPER_ADMIN_USER,
};

export const USERS_ARRAY = Object.values(USERS);
