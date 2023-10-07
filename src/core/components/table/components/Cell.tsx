import { Typography } from "../../typography";
import Image from "next/image";
import Link from "next/link";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { formatCurrency } from "yaya/core/utils";
import { SALE_STATE } from "yaya/shared";

export type TableCellVariant = "link" | "boolean" | "image" | "currency";

interface TableCellProps {
  value: string | number;
  type?: TableCellVariant;
}

export const TableCell = ({ value, type }: TableCellProps) => {
  if (type === "link") {
    const link =
      typeof value === "string" && value.startsWith("http")
        ? value
        : `https://${value}`;

    return (
      <Link href={link} target="_blank">
        <Typography variant="p" className="text-sm font-bold">
          {value}
        </Typography>
      </Link>
    );
  }

  if (type === "boolean") {
    return value === SALE_STATE.ACTIVE ? (
      <BsFillCheckCircleFill className="text-green-500 h-5 w-5" />
    ) : (
      <BsFillXCircleFill className="h-5 w-5" />
    );
  }

  if (type === "image") {
    return (
      <Image
        src={value as string}
        alt="image"
        className="h-10 w-10 rounded-full"
        width={40}
        height={40}
      />
    );
  }

  if (type === "currency") {
    return (
      <Typography variant="p" className="text-sm font-bold">
        {formatCurrency(value as number)}
      </Typography>
    );
  }

  return (
    <Typography variant="p" className="text-sm font-bold">
      {value}
    </Typography>
  );
};
