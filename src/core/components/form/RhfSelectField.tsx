import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/fields/Select";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/Form";

interface RHFSelectFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  description?: string;
  options: { value: any; label: string }[];
}

export const RHFSelectField = (props: RHFSelectFieldProps) => {
  const { label, options, placeholder, description, disabled, name } = props;

  return (
    <FormField
      name={name}
      render={({ field, formState: { isSubmitting } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
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
