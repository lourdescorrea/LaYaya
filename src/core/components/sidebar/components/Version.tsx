import { APP_VERSION } from '../../../configs';

export const VersionCard = () => {
  return (
    <div className='relative flex w-1/2  mx-auto justify-center rounded-[20px] bg-gradient-to-br from-[#868CFF] via-[#432CF3] to-[#422AFB] '>
      <div className='flex h-10 justify-center items-center'>
        <span className='text-lg font-bold text-white'>v{APP_VERSION}</span>
      </div>
    </div>
  );
};
