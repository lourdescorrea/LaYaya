import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

import { en, type ITrpcSubmit } from "yaya/shared";

export interface ISubmit<In, Out> extends ITrpcSubmit<In, Out> {
  onSuccess?: (data: Out, variables: In) => void;
  backPath?: string;
  successMsg?: string;
  errorMsg?: string;
}

export const useSubmitTrpc = <In, Out>(args: ISubmit<In, Out>) => {
  const { push } = useRouter();
  const { trpc, backPath, successMsg, errorMsg } = args;

  const onSuccess = async (data: Out, variables: In) => {
    if (args.onSuccess) {
      args.onSuccess(data, variables);
    }

    if (backPath) {
      push(backPath);
    }
  };

  const { mutateAsync, isLoading } = trpc.useMutation({
    onSuccess,
  });

  const onSubmit = async (variables: In) => {
    toast.promise(mutateAsync(variables), {
      loading: en.common.loading,
      success: <b>{successMsg || en.common.success}</b>,
      error: <b>{errorMsg || en.common.error}</b>,
    });
  };

  return {
    onSubmit,
    isLoading,
  };
};
