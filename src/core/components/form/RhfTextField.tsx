/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/Form";
import { Input } from "./components/fields/Input";
import { type HTMLInputTypeAttribute } from "react";

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
  min?: string;
  max?: string;
}

export const RHFTextField = (props: RHFTextFieldProps) => {
  const { label, type, placeholder, description, disabled, name, min, max } =
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
              min={min}
              max={max}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
