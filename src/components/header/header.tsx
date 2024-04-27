'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import { FaHouse } from 'react-icons/fa6';
import { FaPhoneVolume } from 'react-icons/fa6';

import NavLink from '@/components/header/nav-link';
import ThemeToggle from '@/components/theme-toggle';

const NAV_ITEMS = [
  { path: 'blog', name: '작업' },
  { path: 'about', name: '회사소개' },
  { path: 'projects', name: '공사실적' },
  { path: 'contact', name: '문의' },
];

export default function Header() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const user = navigator.userAgent;
    if (user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) {
      setMobile(true);
    }
  }, [mobile]);

  return (
    <nav className="flex flex-col justify-between px-8 py-12 md:flex-row">
      <Link href="/blog" className="self-start md:self-auto">
        <div className="flex items-center">
          <img src="logo.png" className="h-15 w-20" />
          <h1 className="text-3xl font-bold">(주) CM3네트워크</h1>
        </div>

        <div className="mt-2 flex">
          <div className="mr-2 flex items-center">
            {/* <div className="mr-4 text-xl font-bold">대표전화</div> */}
            <FaHouse size={20} className="mr-2" />
            <div className="text-xl font-bold ">1522-5182</div>
          </div>

          <div className="flex items-center">
            {/* <div className="mr-4 text-xl font-bold">상담전화</div> */}
            <FaPhoneVolume size={20} className="mr-2" />
            <div className="text-xl font-bold">010-2892-6100</div>
          </div>
        </div>
      </Link>
      <div className="my-6 flex space-x-8 self-center md:my-0 md:self-auto">
        <ul className="flex space-x-8 ">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.path}
              className="text-secondary hover:text-primary whitespace-nowrap py-2 text-lg font-medium transition-all duration-300"
            >
              <NavLink path={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
        {!mobile && (
          <div className="absolute right-[10vw] top-12 md:static">
            <ThemeToggle />
          </div>
        )}
      </div>
    </nav>
  );
}
