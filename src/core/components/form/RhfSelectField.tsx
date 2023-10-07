/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/Form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/fields/Select";

interface RHFSelectFieldProps {
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string | string[];
  disabled?: boolean;
  description?: string;
  options: { value: any; label: string }[];
}

export const RHFSelectField = (props: RHFSelectFieldProps) => {
  const {
    label,
    options,
    placeholder,
    description,
    disabled,
    name,
    defaultValue,
  } = props;

  return (
    <FormField
      name={name}
      render={({ field, formState: { isSubmitting } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={defaultValue}
            disabled={disabled || isSubmitting}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
