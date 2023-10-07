/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/Form";
import { FileUpload } from "./components/fields/fileUpload";

interface RHFFileUpload {
  name: string;
  label?: string;
  disabled?: boolean;
  description?: string;
}

export const RHFileUpload = (props: RHFFileUpload) => {
  const { label, disabled, name, description } = props;

  return (
    <FormField
      name={name}
      render={({ field, formState: { isSubmitting } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <FileUpload disabled={disabled || isSubmitting} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
