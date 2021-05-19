import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';



enum ButtonSize {
  normal= 'normal',
  small= 'small',
}

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  size?: ButtonSize,
  fullscreen?: boolean,
  color?: string

}

const Button: React.FC<ButtonProps> = ({ children, onClick, size = 'normal', fullscreen = false, color= 'green' }) => {

  return (
    <button
      type="button"
      className={cn(
        s.root,
        fullscreen ? s.fullscreen : null,
        color === 'green' ? s["root--green"] : null,
        color === 'yellow' ? s["root--yellow"] : null,
        size === ButtonSize.normal ? s["root--normal"] : null,
        size === ButtonSize.small ? s["root--small"] : null,
      )}
      onClick={onClick}
    >
      { children}
    </button>
  );
};

export default Button;
