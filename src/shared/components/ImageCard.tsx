import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { FC } from 'react';

interface ImageCardProps {
  title: string;
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  className?: string;
}

export const ImageCard: FC<ImageCardProps> = ({
  title,
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <div className={`${className ?? ''}`}>
      <div className=''>
        <h3>{title}</h3>
        <div>
          <Image src={src} alt={alt} width={width} className='rounded-md' />
        </div>
      </div>
    </div>
  );
};
