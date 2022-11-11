/* eslint-disable max-len */
import React from 'react';
import { Button } from '../Button/Button';
import './Main.scss';

export const Main: React.FC = () => {
  return (
    <section className="main">
      <div className="main__box">
        <div className="main__title">
          Test assignment for front-end developer
        </div>
        <div className="main__content">
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they&apos;ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
        </div>
        <Button name="Sign up" />
      </div>
    </section>
  );
};
