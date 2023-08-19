import { APP_NAME } from '../../../configs';
import { Divider } from '../../divider';
import { Typography } from '../../typography';

export const Title = () => {
  return (
    <>
      <div className='w-full my-6 flex flex-col items-center justify-center'>
        <Typography
          variant='p'
          className='text-center font-poppins text-[26px] font-bold uppercase'>
          {APP_NAME}
        </Typography>
      </div>
      <Divider className='h-px mb-6' />
    </>
  );
};
