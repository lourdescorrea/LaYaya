import { Table } from "yaya/core";
import { useProductTable } from "./useProductTable";

export const ProductTable = () => {
  const { columns, data, isLoading, deleteFn } = useProductTable();

  return (
    <Table
      columnsData={columns}
      data={data}
      loading={isLoading}
      actions={{
        deleteFn: deleteFn,
      }}
    />
  );
};

//BORRAR!!

//EJEMPLO CON ACCIONES COMPLETAS PASADAS POR PROPS BORRAR UNA VEZ COMPLETADO EL EDITAR Y EL CREAR!!

//BORRAR!!

// import { Table } from "yaya/core";
// import type { Brand } from "yaya/shared";
// import { useProductTable } from "./useProductTable";

// interface ProductTableProps {
//   openCreate: () => void;
//   openEdit: (data: Brand) => void;
// }

// export const ProductTable = (props: ProductTableProps) => {
//   const { openCreate, openEdit } = props;

//   const { columns, data, isLoading, deleteFn } = useProductTable();

//   return (
//     <Table
//       columnsData={columns}
//       data={data}
//       loading={isLoading}
//       actions={{
//         createFn: openCreate,
//         editFn: openEdit,
//         deleteFn: deleteFn,
//       }}
//     />
//   );
// };
