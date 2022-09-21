import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaTimes,
  FaChevronUp,
} from 'react-icons/fa';

import { Links } from '../';

import Image from 'next/image';
import { useState } from 'react';
import { useGlobalContext } from '../../context';

import { ICON_STYLE_FOOTER } from '../utils';

const Footer = () => {
  const { offset, scrollToTop } = useGlobalContext();
  const location = {
    address: 'Др Драге Љочић 3, Београд',
    lat: 44.80241,
    lng: 20.5242,
  };

  const [korisnickiServis, setKorisnickiServis] = useState({
    servis: '',
    propratni: '',
  });

  return (
    <footer className='bg-blue-900/80 w-full relative items-start justify-between  sm:text-sm md:text-base lg:text-lg overflow-hidden text-red-50 pt-5'>
      {/* {korisnickiServis.servis && (
        <ClickAwayListener
          onClickAway={() => setKorisnickiServis({ servis: '', propratni: '' })}
        >
          <div
            className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-md border-2 shadow-lg text-gray-700 py-8 px-4 w-[300px] z-50 '
            style={{ animation: 'fadeIn 0.3s ease' }}
          >
            <span
              className='absolute top-2 text-gray-400 right-2 text-xl'
              onClick={() => setKorisnickiServis({ servis: '', propratni: '' })}
            >
              <FaTimes />
            </span>
            <H2 className='text-center mb-8'>{korisnickiServis.servis}</H2>
            <p className='text-center'>{korisnickiServis.propratni}</p>
          </div>
        </ClickAwayListener>
      )} */}

      <div className=' flex flex-col items-center '>
        <div className='address flex sm:flex-row flex-col sm:justify-start justify-center   md:gap-40 gap-5 items-center sm:items-start  md:items-start border-b border-gray-500 pb-4  '>
          <div className='flex flex-col items-center justify-center text-center'>
            <span className={ICON_STYLE_FOOTER}>
              <FaMapMarkerAlt />
            </span>
            <p className='whitespace-nowrap'> {location.address}</p>
          </div>
          <div className='flex flex-col items-center whitespace-nowrap justify-center'>
            <span className={ICON_STYLE_FOOTER}>
              <FaPhone />
            </span>
            <a href='tel:069 288 72 94'>069 288 72 94</a>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <span className={ICON_STYLE_FOOTER}>
              <FaEnvelope />
            </span>
            <a href='mailto:beograd.l@yandex.com'>beograd.l@yandex.com</a>
          </div>
        </div>
        <div className='flex md:flex-row   flex-col md:gap-40 gap-10   py-4 items-start'>
          <div className='flex flex-col items-start gap-8 w-[300px]'>
            <Image
              src='/asklogo.svg'
              width={200}
              height={80}
              alt='logo'
              unoptimized={true}
              loading='eager'
            />
            <p className='moto'>
              Продавница за куће љубимце која у понуди има све што наше љубимце
              чини ситим и срећним.
            </p>
            <div className='social flex-col flex  justify-center gap-4'>
              <p>Пратите нас на инстаграму</p>
              <div className='flex gap-4'>
                <span className={ICON_STYLE_FOOTER}>
                  <a href='https://instagram.com/ansaks2333'>
                    <FaInstagram />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className='flex gap-10 sm:text-sm md:text-base lg:text-lg'>
            <div className='flex flex-col whitespace-nowrap '>
              <b>Мапа сајта</b>
              <Links text_color='text-gray-50' />
            </div>

            {/* <div className='whitespace-nowrap   '>
              <b>Кориснички сервиси</b>
              <ul className='flex flex-col sm:text-sm md:text-base lg:text-lg gap-2 mt-1 cursor-pointer'>
                <li
                  onClick={(e) =>
                    setKorisnickiServis({
                      servis: e.target.textContent,
                      propratni: 'Испорука робу вршимо курирском службом Bex',
                    })
                  }
                >
                  Испорука робе
                </li>
                <li
                  onClick={(e) =>
                    setKorisnickiServis({
                      servis: e.target.textContent,
                      propratni:
                        'Плаћање се врши по пријему поузећем или уплатом на рачун xxx-yyy-zzz',
                    })
                  }
                >
                  Начини плаћања
                </li>
                <li
                  onClick={(e) =>
                    setKorisnickiServis({
                      servis: e.target.textContent,
                      propratni:
                        'Враћање робе у року од три дана од дана куповине',
                    })
                  }
                >
                  Враћање робе
                </li>
                <li
                  onClick={(e) =>
                    setKorisnickiServis({
                      servis: e.target.textContent,
                      propratni:
                        'Проверите робу и кусур на лицу места. Додатне рекламације не уважамо. Продавац је дужан да вам изда фисклани рачун',
                    })
                  }
                >
                  Рекламације
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      {offset && (
        <div
          className={` z-50 fixed bottom-5 p-2 animate-bounce right-2 rounded-full bg-purple-900 text-gray-50 text-3xl cursor-pointer lg:block hidden opacity-50 hover:opacity-100 transition-all`}
          title='назад на врх стране'
          onClick={scrollToTop}
        >
          <FaChevronUp />
        </div>
      )}

      <p className='  bg-gray-900 w-full text-center'>
        &copy; АСК23 - све за кућне љубимце
      </p>
    </footer>
  );
};

export default Footer;

// AIzaSyBvCnmNbXmNc42-kRm-nU6ZEy_AiQUh16U
