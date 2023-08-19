import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/Form";
import { Checkbox } from "./components/fields/Checkbox";

interface RhfCheckboxProps {
  name: string;
  label?: string;
  description?: string;
}

export function RHFCheckboxField(props: RhfCheckboxProps) {
  const { name, label, description } = props;

  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                {...field}
              />
            </FormControl>
            <FormLabel className="font-normal">{label}</FormLabel>
          </div>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
