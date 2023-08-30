import "@uploadthing/react/styles.css";
import { ProductTable } from "./table/ProductTable";

export const ProductPage = () => {
  return (
    <div className="h-full w-full">
      <ProductTable
        openCreate={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};
