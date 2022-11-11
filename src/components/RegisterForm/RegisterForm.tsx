import React, { useEffect, useState } from 'react';
import { Position } from '../../types/Position';
import { Button } from '../Button/Button';
import { InputForm } from '../InputForm/InputForm';
import { RadioInputForm } from '../RadioInputForm/RadioInputForm';
import './RegisterForm.scss';

export const RegisterForm: React.FC = () => {
  const [positions, setPositions] = useState<[] | Position[]>([]);
  const [positionID, setPositionID] = useState(0);

  useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
      .then(res => res.json())
      .then(resp => {
        setPositions(resp.positions);
        setPositionID(resp.positions[0].id);
      });
  }, []);

  const changePositionID = (id: number) => {
    setPositionID(id);
  };

  return (
    <section className="register">
      <h1 className="register__title">Working with POST request</h1>

      <div className="register__data">
        <div className="register__forms">
          <InputForm />
          <InputForm />
          <InputForm />
        </div>

        <div className="register__position-title">
          Select your position
        </div>

        <div className="register__position-list">
          {positions.map(position => (
            <RadioInputForm
              key={position.id}
              position={position}
              changePositionID={changePositionID}
              checked={positionID === position.id}
            />
          ))}
        </div>
        <div className="register__upload">
          <input type="file" />
        </div>
        <div className="register__signup">
          <Button name="Sign up" disabled={positions.length > positionID} />
        </div>
      </div>
    </section>
  );
};
