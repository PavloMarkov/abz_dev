import React from 'react';
import loader from './Preloader.svg';
import './Preloader.scss';

export const Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <img src={loader} alt="preloader" className="preloader__img" />
    </div>
  );
};
