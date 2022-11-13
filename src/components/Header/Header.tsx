import React from 'react';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import './Header.scss';

type Props = {
  click: () => void;
};

export const Header: React.FC<Props> = ({ click }) => {
  return (
    <header className="header">
      <div>
        <Logo />
      </div>
      <div className="header__actions">
        <Button name="Users" />
        <Button name="Sign up" onClick={click} />
      </div>
    </header>
  );
};
