import { api } from "../../../core/trpc/index";

export default function Page() {
  const addBrandMutation = api.brands.addBrand.useMutation({});

  const createNewBrand = async () => {
    try {
      const data = {
        text: "master",
      };

      const response = await addBrandMutation.mutateAsync(data);

      if (response.success) {
        console.log("Brand created successfully:", response.brand?.name);
      } else {
        console.error("Failed to create brand:", response.message);
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
