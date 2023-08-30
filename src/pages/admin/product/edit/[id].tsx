import { ProductEditForm } from "yaya/containers/product/forms";

export default function Page() {
  return <ProductEditForm />;
}

// Page.Layout = DashboardLayout;
Page.LayoutProps = {
  headTitle: "Productos",
  headSubtitle: "Editar Productos",
};
