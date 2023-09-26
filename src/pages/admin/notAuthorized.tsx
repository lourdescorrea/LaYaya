import { Button } from "yaya/core";
import { en } from "yaya/shared";

export default function NotAuthorized() {
  return (
    // TODO:CONECTAR EL BOTODN DE INCIIO CON LA PANTALLA PRINCIPAL
    <div className="jutify-center mt-12 flex flex-col items-center ">
      <img className="" src="/img/auth/notAuthorized.jpg"></img>
      <Button className="mt-12" size="sm" variant="outline">
        {en.auth.login.fields.button.title}
      </Button>
    </div>
  );
}
