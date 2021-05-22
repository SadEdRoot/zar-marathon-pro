import React from 'react';
import s from './Heading.module.scss';

interface HeadingProps {
  size: number,
  className?: string
}



const Heading:React.FC<HeadingProps> = ({ children, size, className }) => {
  const Tag = `h${size}` as keyof JSX.IntrinsicElements;

  return (
    <div>
      <Tag className={className}>{children}</Tag>
    </div>
  );
}

export default Heading;
