import { useSession } from "next-auth/react";
import { SaleCreatePage } from "yaya/containers";

export default function Page() {
  const { data } = useSession();

  if (!data) return null;

  return <SaleCreatePage shop={data.user.shops[0]!} />;
}
