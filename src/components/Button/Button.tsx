import React from 'react';
import './Button.scss';
import classNames from 'classnames';

type Props = {
  name: string;
  widthProp?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: React.FC<Props> = ({
  name,
  widthProp,
  onClick,
  disabled,
}) => {
  const buttonWidth = { width: widthProp ? `${widthProp}px` : '100px' };

  return (
    <button
      type="button"
      // className={disabled ? 'button disabled' : 'button active'}
      className={classNames('button', disabled ? 'disabled' : 'active')}
      style={buttonWidth}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};
