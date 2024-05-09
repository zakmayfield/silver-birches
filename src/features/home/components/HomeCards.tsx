import { ImageCard } from '@/shared/components';
import { FC } from 'react';
import family from '../../../../public/stock-family.jpeg';
import friends from '../../../../public/stock-friends.jpeg';
import fishing from '../../../../public/stock-fishing.jpeg';
import fun from '../../../../public/stock-fun.jpeg';

interface HomeCardsProps {}

export const HomeCards: FC<HomeCardsProps> = ({}) => {
  return (
    <div className='flex'>
      <div className='flex gap-6 mx-auto'>
        <ImageCard title='friends' src={friends} alt='' height={150} />
        <ImageCard title='family' src={family} alt='' height={150} />
        <ImageCard title='fishing' src={fishing} alt='' height={150} />
        <ImageCard title='fun' src={fun} alt='' height={150} />
      </div>
    </div>
  );
};

export default HomeCards;
