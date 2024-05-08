import { Logo, Navbar } from '@/shared/components';
import { FC } from 'react';

interface AppHeaderProps {}

export const AppHeader: FC<AppHeaderProps> = ({}) => {
  return (
    <header className='flex items-center justify-between border px-6'>
      <Logo />
      <Navbar />
    </header>
  );
};
