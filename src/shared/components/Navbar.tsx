import Link from 'next/link';
import { FC } from 'react';

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className='flex gap-6'>
      <Link href='/'>home</Link>
      <Link href='/rates'>rates</Link>
    </nav>
  );
};
