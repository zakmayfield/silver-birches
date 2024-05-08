import { FC } from 'react';
import { Logo } from './Logo';

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className='flex items-center justify-center border rounded-lg'>
      <Logo />

      <div className='flex items-start justify-center gap-24 border rounded-lg w-full'>
        <div>
          <h6>Contact</h6>

          <div className='flex gap-6'>
            <div>Content A</div>
            <div>Content B</div>
            <div>Content C</div>
          </div>
        </div>

        <div>
          <h6>Socials</h6>

          <div className='flex gap-6'>
            <div>Content 1</div>
            <div>Content 2</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
