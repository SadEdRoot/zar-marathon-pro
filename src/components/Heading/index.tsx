import React from 'react';
import s from './Heading.module.scss';

interface HeadongProps {
  HeaderSize: number
}



const Heading:React.FC<HeadongProps> = ({ children, HeaderSize }) => {
  switch (HeaderSize) {
    case 1:
      return (
        <div>
          `<h1 className={s.h1}>{children}</h1>`
        </div>
      );
    case 2:
      return (
        <div>
          `<h2 className={s.h2}>{children}</h2>`
        </div>
      );
    case 3:
      return (
        <div>
          `<h3 className={s.h3}>{children}</h3>`
        </div>
      );
    case 4:
      return (
        <div>
          `<h4 className={s.h4}>{children}</h4>`
        </div>
      );
    case 5:
      return (
        <div>
          `<h5 className={s.h5}>{children}</h5>`
        </div>
      );
    case 6:
      return (
        <div>
          `<h6 className={s.h6}>{children}</h6>`
        </div>
      );
    default:
      return (
        <p>
          {children}
        </p>
      );
  }
  ;
}

export default Heading;
