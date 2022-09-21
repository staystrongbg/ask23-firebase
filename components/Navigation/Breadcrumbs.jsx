import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import products from '../../products.json';

const BreadcrumbExample = () => {
  const router = useRouter();
  const pathSnippets = router.asPath.split('/').filter((i) => i);
  const [disabled, setDisabled] = useState(pathSnippets.length - 1);
  const urls = pathSnippets.map((snippet, idx) => {
    let url = `/${snippet.slice(0, 12)}`;
    if (snippet === 'proizvodi') snippet = 'производи';
    if (snippet === 'brendovi') snippet = 'брендови';
    if (snippet === 'o-nama') snippet = 'о нама';
    if (snippet === 'kontakt') snippet = 'контакт';
    if (snippet === 'akcije') snippet = 'акције';
    if (snippet === 'psi') snippet = 'пси';
    if (snippet === 'macke') snippet = 'мачке';
    if (snippet === 'ptice') snippet = 'птице';
    if (snippet === 'ribice') snippet = 'рибице';
    if (snippet === 'glodari') snippet = 'глодари';
    if (snippet.includes('#')) return snippet.slice(0, 1);
    const compUrl = products.find((url) => url._id.$oid === snippet);
    // ali products treba da povuces iiz baze...ne iz contexAPIja
    if (compUrl) {
      snippet =
        compUrl.name.length > 12
          ? compUrl.name.slice(0, 12) + '... '
          : compUrl.name;
    }
    return (
      <Link key={idx} href={url}>
        <a className={` ${disabled === idx ? 'pointer-events-none ' : ''} `}>
          <span className='mr-2'>/</span>{' '}
          <span className={` ${disabled === idx ? 'text-orange-900  ' : ''} `}>
            {snippet}
          </span>
        </a>
      </Link>
    );
  });
  return (
    <div className='breadcrumbs sm:w-4/5 w-full m-auto pt-20 bg-transparent '>
      <div
        className=' sm:text-base text-sm flex gap-2 text-gray-600 uppercase cursor-pointer  p-2  '
        // title={snippet}
      >
        <Link href='/'>
          <a>почетна</a>
        </Link>
        {urls.map((url) => url)}
      </div>
    </div>
  );
};

export default BreadcrumbExample;
