import { api, useSubmitTrpc } from "yaya/core";

export default function Page() {
  const { onSubmit } = useSubmitTrpc({
    trpc: api.brands.create,
  });

  const execute = () => {
    onSubmit({
      name: "master",
    });
  };

  return (
    <div className="h-full w-full">
      <h1>Hi from example</h1>
      <button onClick={execute}>Crear Nueva Marca</button>
    </div>
  );
}
