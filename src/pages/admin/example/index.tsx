import { api } from "yaya/core";

export default function Page() {
  //llamada a usequery
  const all = api.brands.getAll.useQuery();
  console.log(">>>>>>", all);

  //llamada a usemutation
  // const { onSubmit } = useSubmitTrpc({
  //   trpc: api.brands.create,
  // });

  //const execute = () => {
  //onSubmit({
  //name: "royal",
  // id: "cllnw062k0000v1ibu26b5flo",
  //});
  //};

  return (
    <div className="h-full w-full">
      <h1>Hi from example</h1>
      {/* <button onClick={execute}>Crear Nueva Marca</button> */}
    </div>
  );
}
