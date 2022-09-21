import Image from 'next/image';
import { BottomLine } from '../';
import { H1, brands } from '../utils';

const Brendovi = () => {
  return (
    <section className='brands relative mx-auto w-full flex flex-col items-center justify-center py-8 min-h-screen '>
      <div className='absolute top-0 right-0 left-0 bottom-0 bg-gray-700/60'></div>
      <H1 className='text-gray-50 drop-shadow-lg text-center '>
        Добродошли у АСК23 <br /> место где ћете наћи све што вашег љубимца чини
        срећним!
      </H1>
      <p className='text-white drop-shadow-md mt-10 text-center text-xl tracking-wide '>
        Код нас ћете наћи производе реномираних произвођача
      </p>
      <BottomLine />
      <div className=' flex flex-wrap items-center justify-center w-4/5 gap-4 '>
        {brands.slice(0, 7).map((logo, idx) => {
          return (
            <Image
              key={idx}
              src={logo}
              alt=''
              placeholder='blur'
              blurDataURL={logo}
              unoptimized={true}
              loading='eager'
              objectFit='contain'
              width={250}
              height={100}
              className='z-10  transition-all '
            />
          );
        })}
      </div>
    </section>
  );
};

export default Brendovi;
