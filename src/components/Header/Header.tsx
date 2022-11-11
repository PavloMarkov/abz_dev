import React from 'react';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div>
        <Logo />
      </div>
      <div className="header__actions">
        <Button name="Users" />
        <Button name="Sign up" />
      </div>
    </header>
  );
};
