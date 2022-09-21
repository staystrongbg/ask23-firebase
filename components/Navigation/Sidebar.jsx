import styles from '../../styles/sidebar.module.scss';

import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
const Sidebar = ({ links, setShowSidebar }) => {
  return (
    <div className={styles['sidebar']}>
      <FaTimes
        className='absolute top-4 right-4 cursor-pointer text-gray-800 text-xl'
        onClick={() => setShowSidebar(false)}
      />
      <ul className={styles['sidebar-links']}>
        {/* <Search /> */}
        <li onClick={() => setShowSidebar(false)}>
          <Link href='/proizvodi'>
            <a
              className={`text-slate-700 tracking-wider border-b-4 border-transparent hover:border-b-4 hover:border-red-400 select-none whitespace-nowrap hover:text-slate-500'
          }`}
            >
              производи
            </a>
          </Link>
        </li>

        {links.map((link, idx) => (
          <li
            className={styles['sidebar-link']}
            key={idx}
            onClick={() => setShowSidebar(false)}
          >
            <Link href={link.href}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
        <li onClick={() => setShowSidebar(false)}>
          <Link href='/akcije'>
            <a className='text-slate-50 py-1 px-2 tracking-wider hover:bg-red-400 rounded-sm select-none bg-red-600'>
              акције
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
