import React from 'react';
import { Header } from './components/Header/Header';
import './App.scss';
import { Main } from './components/Main/Main';
import { Cards } from './components/Cards/Cards';
import { RegisterForm } from './components/RegisterForm/RegisterForm';

export const App: React.FC = () => {
  // const [type, setType] = useState('mobile');

  // useEffect(() => {
  //   const deviceWidth = window.innerWidth;

  //   if (deviceWidth >= 1170) {
  //     setType('TV');
  //   } else if (deviceWidth >= 1024) {
  //     setType('desktop');
  //   } else if (deviceWidth >= 768) {
  //     setType('tablet');
  //   } else {
  //     setType('mobile');
  //   }
  // },
  // []);

  return (
    <div className="page">
      <div className="page__header">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="page__main">
        <div className="container">
          <Main />
          <Cards />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};
