import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import './App.scss';
import { Main } from './components/Main/Main';
import { Cards } from './components/Cards/Cards';
import { RegisterForm } from './components/RegisterForm/RegisterForm';

export const App: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isRegister, setIsRegister] = useState(true);

  const clickHandle = () => setIsSignUp(!isSignUp);
  const registerHandle = () => setIsRegister(false);

  return (
    <div className="page">
      <div className="page__header">
        <div className="container">
          <Header
            click={clickHandle}
          />
        </div>
      </div>
      <div className="page__main">
        <div className="container">
          <Main click={clickHandle} />
          {isSignUp && (
            <>
              <Cards isRegister={isRegister} />
              <RegisterForm isRegister={isRegister} registerHandle={registerHandle} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
