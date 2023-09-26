import { HTMLInputTypeAttribute } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/Form";
import { Input } from "./components/fields/Input";

interface RHFTextFieldProps {
  name: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  disabled?: boolean;
  description?: string;
  defaultValue?: any;
  value?: any;
  onChange?: any;
}

export const RHFTextField = (props: RHFTextFieldProps) => {
  const { label, type, placeholder, description, disabled, name, value } =
    props;
  return (
    <FormField
      name={name}
      render={({ field, formState: { isSubmitting } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              disabled={disabled || isSubmitting}
              type={type}
              value={field.value || ""}
              onChange={(e) => field.onChange(e.target.value)}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
