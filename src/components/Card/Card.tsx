import React from 'react';
import classnames from 'classnames';
import './Card.scss';
import { User } from '../../types/User';
import defaultImg from './Vector.svg';

type Props = {
  user: User;
};

export const Card: React.FC<Props> = ({ user }) => {
  const imageOnErrorHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    // eslint-disable-next-line no-param-reassign
    event.currentTarget.src = defaultImg;
  };

  const trimInfo = (str: string): string => {
    if (str.length > 30) {
      let trimmedStr = str.slice(0, 27);

      trimmedStr += '...';

      return trimmedStr;
    }

    return str;
  };

  return (
    <section className="card">
      <img
        src={user.photo}
        alt="foto"
        className="card__img"
        onError={imageOnErrorHandler}
      />
      <div
        className={classnames('card__name', { 'card__name--tooltip': user.name.length > 30 })}
        data-tooltip={user.name}
      >
        {trimInfo(user.name)}
      </div>
      <div className="card__info">
        <div className="card__job">{user.position}</div>
        <div
          className={classnames('card__mail', { 'card__mail--tooltip': user.name.length > 30 })}
          data-tooltip={user.email}
        >
          <a href={`mailto:${user.email}`} className="card__mail-link">
            {trimInfo(user.email)}
          </a>
        </div>
        <div className="card__phone">
          <a href={`tel:${user.phone}`} className="card__phone-link">
            {user.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
