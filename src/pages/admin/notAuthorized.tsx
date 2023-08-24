import { Button } from "yaya/core";

export default function NotAuthorized() {
  return (
    <div className="jutify-center   mt-12 flex flex-col items-center ">
      <img className="" src="/img/auth/notAuthorized.jpg"></img>
      <Button className=" mt-12 " size="sm" variant="outline">
        Volver al inicio
      </Button>
    </div>
  );
}
