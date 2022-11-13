/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Position } from '../../types/Position';
import { Button } from '../Button/Button';
import { FileInputForm } from '../FileInputForm/FileInputForm';
import { InputForm } from '../InputForm/InputForm';
import { RadioInputForm } from '../RadioInputForm/RadioInputForm';
import './RegisterForm.scss';
import successImage from './success-image.svg';

type Props = {
  registerHandle: () => void;
  isRegister: boolean;
};

export const RegisterForm: React.FC<Props> = ({ isRegister, registerHandle }) => {
  const [tokenKey, setTokenKey] = useState('');
  const [positions, setPositions] = useState<[] | Position[]>([]);
  const [positionID, setPositionID] = useState(0);
  const [foto, setFoto] = useState<null | any>(null);
  const [userName, setUserName] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const formData = new FormData();

  formData.append('position_id', `${positionID}`);
  formData.append('name', userName);
  formData.append('email', userMail);
  formData.append('phone', userPhone);
  formData.append('photo', foto);

  useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
      .then(res => res.json())
      .then(resp => {
        setPositions(resp.positions);
      });
  }, []);

  useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then(res => res.json())
      .then(resp => {
        setTokenKey(resp.token);
        localStorage.setItem('token', resp.token);
      });
  }, []);

  const changePositionID = (id: number) => {
    setPositionID(id);
  };

  const handleFoto = (obj: any) => {
    setFoto(obj);
  };

  const handleUserName = (str: string) => setUserName(str);
  const handleUserMail = (str: string) => setUserMail(str);
  const handleUserPhone = (str: string) => setUserPhone(str);

  const cantSignUp = (foto === null) || (positionID === 0);

  const handleSignUp = () => {
    fetch(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users',
      {
        method: 'POST',
        body: formData,
        headers: { Token: tokenKey },
      },
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => registerHandle());
  };

  return (
    <section className="register">
      <h1 className="register__title">
        {isRegister ? 'Working with POST request' : 'User successfully registered'}
      </h1>

      {isRegister
        ? (
          <div className="register__data">
            <div className="register__forms">
              <InputForm
                label="Your name"
                value={userName}
                handleChange={handleUserName}
              />
              <InputForm
                label="Email"
                value={userMail}
                handleChange={handleUserMail}
              />
              <InputForm
                label="Phone"
                value={userPhone}
                handleChange={handleUserPhone}
              />
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
              <FileInputForm onClick={handleFoto} />
            </div>
            <div className="register__signup">
              <Button name="Sign up" disabled={cantSignUp} onClick={handleSignUp} />
            </div>
          </div>
        ) : (
          <div className="register__success">
            <img src={successImage} alt="successfull registration" />
          </div>
        )}
    </section>
  );
};
