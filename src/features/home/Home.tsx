import { FC } from 'react';
import { HomeCards, HomeIntro } from './components';
interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
  return (
    <div className='flex flex-col gap-12'>
      <HomeIntro />
      <HomeCards />
    </div>
  );
};
