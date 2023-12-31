import { Button, Typography } from "../components";
import { cn } from "../utils";
import { useSubmitTrpc, type ISubmit } from "./useSubmitTrpc";
import { toast } from "react-hot-toast";
import { en } from "yaya/shared";

interface IActionToast<In, Out> extends ISubmit<In, Out> {
  alertMsg: string;
}

export const useActionToast = <In, Out>(args: IActionToast<In, Out>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { alertMsg, ...submitProps } = args;

  const { onSubmit } = useSubmitTrpc<In, Out>(submitProps);

  const openToast = (variables: In) => {
    toast.custom(
      (t) => {
        const dismiss = () => toast.dismiss(t.id);
        const confirm = () => {
          dismiss();
          onSubmit(variables);
        };

        return (
          <div
            className={cn(
              " pointer-events-auto flex w-full max-w-md rounded-lg bg-card shadow-lg ring-1 ring-black ring-opacity-5",
              t.visible ? "animate-enter" : "animate-leave"
            )}
          >
            <div className="w-0 flex-1 bg-white p-4">
              <Typography variant="large">{args.alertMsg}</Typography>
              <div className="mt-4 flex w-full justify-end space-x-4">
                <Button variant="default" className="" onClick={dismiss}>
                  {en.common.cancel}
                </Button>
                <Button variant="default" className="" onClick={confirm}>
                  {en.common.confirm}
                </Button>
              </div>
            </div>
          </div>
        );
      },
      { duration: 5000 }
    );
  };

  return openToast;
};
