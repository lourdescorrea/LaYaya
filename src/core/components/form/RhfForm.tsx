import { PropsWithChildren } from "react";
import { UseFormReturn } from "react-hook-form";
import { Form } from "./components/Form";

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
