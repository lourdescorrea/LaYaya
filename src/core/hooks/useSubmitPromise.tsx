import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { en } from "../../shared/i18n/en";
import { useBoolean } from "./useBoolean";

interface ISubmit<T, R = void> {
  apiFn: (variables: T) => Promise<R>;
  onSuccess?: (data: R, variables: T) => void;
  backPath?: string;
  successMsg?: string;
  errorMsg?: string;
}

export const useSubmitPromise = <T, R = void>(args: ISubmit<T, R>) => {
  const { push } = useRouter();
  const errorState = useBoolean(false);
  const loadingState = useBoolean(false);

  const { apiFn, onSuccess, backPath, successMsg, errorMsg } = args;

  const promiseFn = async (variables: T) => {
    try {
      loadingState.onTrue();

      const data = await apiFn(variables);

      if (onSuccess) {
        onSuccess(data, variables);
      }

      if (backPath) {
        push(backPath);
      }
    } catch (error) {
      errorState.onTrue();
      throw error;
    } finally {
      loadingState.onFalse();
    }
  };

  const onSubmit = async (variables: T) => {
    toast.promise(promiseFn(variables), {
      loading: en.common.loading,
      success: <b>{successMsg || en.common.success}</b>,
      error: <b>{errorMsg || en.common.error}</b>,
    });
  };

  return {
    onSubmit,
    isError: errorState.value,
    isLoading: loadingState.value,
  };
};
