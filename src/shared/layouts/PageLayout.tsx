import { FC } from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return <main className='min-h-[50vh] border rounded-lg p-6'>{children}</main>;
};
