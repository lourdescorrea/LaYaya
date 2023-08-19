import Link from 'next/link';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { Typography } from '../../typography';

interface TableCellProps {
  value: string | number;
  type?: 'link' | 'boolean';
}

// TODO ADD VARIANT OF TABLE CELL

export const TableCell = ({ value, type }: TableCellProps) => {
  if (type === 'link') {
    const link =
      typeof value === 'string' && value.startsWith('http')
        ? value
        : `https://${value}`;

    return (
      <Link href={link} target='_blank'>
        <Typography variant='p' className='text-sm font-bold'>
          {value}
        </Typography>
      </Link>
    );
  }

  if (type === 'boolean') {
    return value ? (
      <BsToggleOn className='text-green-500 h-5 w-5' />
    ) : (
      <BsToggleOff className='h-5 w-5' />
    );
  }

  return (
    <Typography variant='p' className='text-sm font-bold'>
      {value}
    </Typography>
  );
};
