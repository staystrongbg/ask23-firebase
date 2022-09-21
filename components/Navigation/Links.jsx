import Link from 'next/link';
import { useGlobalContext } from '../../context';

const Links = ({ text_color }) => {
  const { links } = useGlobalContext();
  return (
    <div className={` gap-4 xl:gap-6 flex z-30 `}>
      {links.map((link, i) => (
        <Link key={i} href={link.href}>
          <a
            className={`select-none whitespace-nowrap ${text_color} border-b-4 border-transparent w-fit hover:border-orange-600  sm:text-sm md:text-base lg:text-[16px]
               `}
          >
            {link.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Links;
