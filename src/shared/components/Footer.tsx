import { FC } from 'react';

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className='flex items-start justify-center gap-12 border'>
      <div>
        <h6>Contact</h6>

        <div>Content A</div>
        <div>Content B</div>
        <div>Content C</div>
      </div>

      <div>
        <h6>Socials</h6>

        <div>Content 1</div>
        <div>Content 2</div>
      </div>
    </footer>
  );
};
