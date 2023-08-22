import { api } from "../../../core/trpc/index";
export default function Page() {
  const createNewBrand = () => {
    try {
      const response = api.brands.addBrand.useMutation({});

      if (response.isSuccess) {
        console.log("Brand created successfully:");
      } else {
        console.error("Failed to create brand:");
      }
    } catch (error) {
      console.error("Error creating brand:", error);
    }
  };

  return (
    <div className="h-full w-full">
      <h1>Hi from example</h1>
      <button onClick={createNewBrand}>Crear Nueva Marca</button>
    </div>
  );
}
