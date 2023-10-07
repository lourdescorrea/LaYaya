import Image from "next/image";
import { useRouter } from "next/router";
import { Button, defaultRoute } from "yaya/core";
import { en } from "yaya/shared";

export default function NotAuthorized() {
  const { push } = useRouter();

  return (
    <div className="jutify-center mt-12 flex flex-col items-center ">
      <Image alt="Not authorized" src="/img/auth/notAuthorized.jpg" />
      <Button
        className="mt-12"
        size="sm"
        variant="outline"
        onClick={() => push(defaultRoute)}
      >
        {en.auth.login.fields.button.title}
      </Button>
    </div>
  );
}
