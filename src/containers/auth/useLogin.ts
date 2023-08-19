import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

import { useRouter } from "next/router";
import { paths, useSubmitPromise } from "yaya/core";
import { en, loginSchema } from "yaya/shared";

interface FormProps {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const { push } = useRouter();
  const methods = useForm<FormProps>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const submitHandler = async (data: FormProps) => {
    const result = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (result?.error) {
      throw new Error(result.error);
    }

    if (result?.ok && !result?.error) {
      push(paths.example.root);
      return;
    }
  };

  const { isLoading, onSubmit } = useSubmitPromise({
    apiFn: submitHandler,
    successMsg: en.auth.login.messages.success,
    errorMsg: en.auth.login.messages.errors.default,
  });

  return {
    isLoading,
    onSubmit,
    methods,
  };
};
