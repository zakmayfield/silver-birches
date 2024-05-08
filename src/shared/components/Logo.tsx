import { FC } from 'react';
import Image from 'next/image';
import SilverBirchesLogo from '../../../public/silver-birches-logo.png';

interface LogoProps {}

export const Logo: FC<LogoProps> = ({}) => {
  return (
    <Image
      src={SilverBirchesLogo}
      alt='Silver Birches Resort Logo'
      width={150}
    />
  );
};
