import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/Form";
import { FileUpload } from "./components/fields/FileUpload";

interface RHFFileUpload {
  name: string;
  label?: string;
  // placeholder?: string;
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
            <FileUpload
              // label={label}
              disabled={disabled || isSubmitting}
              {...field}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
