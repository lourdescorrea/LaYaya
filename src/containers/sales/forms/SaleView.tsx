import { SaleFields } from ".";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Button, RhfForm, paths } from "yaya/core";
import { en, type RouterOutputs } from "yaya/shared";

interface Props {
  data: RouterOutputs["sales"]["getById"];
}

export const SaleViewForm = (props: Props) => {
  const { push } = useRouter();

  const methods = useForm({
    defaultValues: {
      ...props.data,
    },
  });

  const dummySubmit = (data: any) => {
    console.log(data);
  };

  return (
    <RhfForm methods={methods} onSubmit={dummySubmit}>
      <div className="flex flex-col">
        <SaleFields isView paymentMethod={props.data?.paymentMethod} />

        <div className="flex space-x-4 justify-end mt-4">
          <Button
            variant="outline"
            type="button"
            className="w-32"
            onClick={() => push(paths.sales.root)}
          >
            {en.common.go_back}
          </Button>
        </div>
      </div>
    </RhfForm>
  );
};
