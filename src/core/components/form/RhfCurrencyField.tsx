/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/Form";
import { type HTMLInputTypeAttribute } from "react";
import CurrencyInput from "react-currency-input-field";

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

export const RHFCurrencyField = (props: RHFTextFieldProps) => {
  const { label, placeholder, description, disabled, name } = props;
  return (
    <FormField
      name={name}
      render={({ field, formState: { isSubmitting } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <CurrencyInput
              placeholder={placeholder}
              allowNegativeValue={false}
              disabled={disabled || isSubmitting}
              disableAbbreviations
              intlConfig={{
                currency: "ARS",
                locale: "es-AR",
              }}
              prefix="$"
              className={
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              }
              defaultValue={field.value ?? 0}
              decimalsLimit={2}
              value={field.value}
              onValueChange={(value) => field.onChange(value)}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
