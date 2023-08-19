import { BiLoaderAlt } from "react-icons/bi";

import { en } from "yaya/shared";
import { Button, type ButtonProps } from "./Button";

export function LoadingButton(props: ButtonProps & { loading?: boolean }) {
  const { loading, disabled, children, ...rest } = props;

  return (
    <Button {...rest} disabled={disabled || loading}>
      {!loading && children}
      {loading && (
        <>
          <BiLoaderAlt className="mr-2 h-4 w-4 animate-spin" />
          {en.common.wait}
        </>
      )}
    </Button>
  );
}
