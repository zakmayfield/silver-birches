import Image from 'next/image';
import { FC } from 'react';
import cabins1 from '../../../../public/cabins1.jpeg';
import Link from 'next/link';

interface HomeIntroProps {}

export const HomeIntro: FC<HomeIntroProps> = ({}) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='w-3/5 flex mx-auto'>
        <Image
          src={cabins1}
          alt='Photo by Ryan Stone: cabin in the woods'
          className='rounded-lg'
          priority={true}
        />
      </div>

      <div className='w-1/2 mx-auto flex flex-col gap-6'>
        <p>
          Silver Birches Resort is a family run resort in operation since the
          1930's. It has some 350 acres and some 4850 feet of rocky Lake Huron
          Shoreline. We have daily and seasonal cottages and trailer sites. It
          is the largest resort on the island and close to restaurants and the
          Cup and Saucer Trail.
        </p>

        <p>
          If you don't want that crowded cottage experience then{' '}
          <Link href='contact' className='underline'>
            contact us
          </Link>{' '}
          or check out our{' '}
          <Link href='/rates' className='underline'>
            rates
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default HomeIntro;
