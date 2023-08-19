import { FiSearch } from "react-icons/fi";

import { en } from "yaya/shared";
import { DebouncedInput } from "../../fields/DebouncedInputField";

interface TableFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export const TableFilter = ({ value, onChange }: TableFilterProps) => {
  return (
    <div className="flex h-full min-h-[40px] w-1/2 items-center rounded-full bg-background sm:w-fit xl:w-[225px]">
      <p className="pl-3 pr-2 text-xl">
        <FiSearch className="h-4 w-4" />
      </p>
      <DebouncedInput
        value={value ?? ""}
        onChange={(value) => onChange(String(value))}
        type="text"
        placeholder={en.common.search}
        className="m:w-fit block h-full w-full rounded-full bg-background text-sm font-medium outline-none"
      />
    </div>
  );
};
