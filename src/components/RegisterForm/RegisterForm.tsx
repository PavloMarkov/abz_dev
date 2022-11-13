/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Position } from '../../types/Position';
import { Button } from '../Button/Button';
import { FileInputForm } from '../FileInputForm/FileInputForm';
import { InputForm } from '../InputForm/InputForm';
import { RadioInputForm } from '../RadioInputForm/RadioInputForm';
import './RegisterForm.scss';

export const RegisterForm: React.FC = () => {
  const [positions, setPositions] = useState<[] | Position[]>([]);
  const [positionID, setPositionID] = useState(0);
  const [foto, setFoto] = useState<null | any>(null);

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

  const handleFoto = (obj: any) => {
    setFoto(obj);
  };

  const cantSignUp = (foto === null) || (positionID === 0);

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
          {positions.length > 0 && positions.map((position: Position) => (
            <RadioInputForm
              key={position.id}
              position={position}
              changePositionID={changePositionID}
              checked={positionID === position.id}
            />
          ))}
        </div>
        <div className="register__upload">
          {/* <label htmlFor="file" className="file">
            <input
              type="file"
              id="file"
              accept=".jpg, .jpeg"
              className="file__input"
            />
            Upload your photo
          </label> */}
          <FileInputForm onClick={handleFoto} />
        </div>
        <div className="register__signup">
          <Button name="Sign up" disabled={cantSignUp} />
        </div>
      </div>
    </section>
  );
};
