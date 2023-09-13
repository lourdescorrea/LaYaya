import { ROLES } from "./roles";
import { SHOPS } from "./shops";

const DUARTE_USER = {
  id: "1",
  name: " Local Duarte",
  email: "duarte@gmail.com",
  password: "123456",
  role: ROLES.SELLER,
  shops: [SHOPS.DUARTE],
};

const COLON_USER = {
  id: "2",
  name: " Local Colón",
  email: "colon@gmail.com",
  password: "123456",
  role: ROLES.SELLER,
  shops: [SHOPS.COLON],
};

const ADMIN_USER = {
  id: "3",
  name: "Admin",
  email: "admin@gmail.com",
  password: "123456",
  role: ROLES.ADMIN,
  shops: [SHOPS.DUARTE, SHOPS.COLON, SHOPS.DEPOSIT],
};

const SUPER_ADMIN_USER = {
  id: "4",
  name: "Super Admin",
  email: "superadmin@gmail.com",
  password: "123456",
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
