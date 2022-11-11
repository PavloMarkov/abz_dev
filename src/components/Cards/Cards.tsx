/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { User } from '../../types/User';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import './Cards.scss';

export const Cards: React.FC = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [users, setUsers] = useState<[] | User[]>([]);

  const handleClick = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
      .then(res => res.json())
      .then(resp => {
        setUsers(prev => [...prev, ...resp.users]);
        setTotalPages(resp.total_pages);
      });
  }, [page]);

  const usersToShow = [...users].sort(
    (first, second) => second.registration_timestamp - first.registration_timestamp,
  );

  return (
    <section className="cards">
      <h1 className="cards__title">
        Working with GET request
      </h1>
      <div className="cards__list">
        {usersToShow.map(user => (
          <Card
            key={user.id}
            user={user}
          />
        ))}
      </div>
      {(totalPages > page) && (
        <Button
          name="Show more"
          widthProp="120"
          onClick={handleClick}
        />
      )}
    </section>
  );
};
