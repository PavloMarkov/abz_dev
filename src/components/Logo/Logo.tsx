import React from 'react';
import imgLogo from './Logo.svg';

export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={imgLogo} alt="logo" className="logo__img" />
    </div>
  );
};
