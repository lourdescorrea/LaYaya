import { Form } from "./components/Form";
import { type PropsWithChildren } from "react";
import { type UseFormReturn } from "react-hook-form";

type ExtractFormData<M> = M extends UseFormReturn<infer T, any, undefined>
  ? T
  : never;

interface RhfFormProps<M> {
  methods: M;
  onSubmit: (data: ExtractFormData<M>) => void;
}

export const RhfForm = <M extends UseFormReturn<any, any, undefined>>(
  props: PropsWithChildren<RhfFormProps<M>>
) => {
  const { methods, children, onSubmit } = props;

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-3">
        {children}
      </form>
    </Form>
  );
};
