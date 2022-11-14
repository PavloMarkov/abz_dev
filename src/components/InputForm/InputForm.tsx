import React, { useState } from 'react';
import './InputForm.scss';
import classnames from 'classnames';

type Props = {
  label: string;
  value: string;
  handleChange: (str: string) => void;
};

const isLengthCorrect = (num: number, min: number, max = Infinity) => {
  return num >= min && num <= max;
};

const isMailCorrect = (str: string) => {
  const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  return pattern.test(str);
};

const isPhoneNumberCorrect = (str: string) => {
  const pattern = /[+]{0,1}380([0-9]{9})$/;

  return pattern.test(str);
};

export const InputForm: React.FC<Props> = ({ label, value, handleChange }) => {
  const [wasOnField, setWasOnField] = useState(false);
  let typeData = 'text';

  const handleError = () => {
    switch (label) {
      case 'Your name':
        return isLengthCorrect(value.length, 2, 60);

      case 'Email':
        typeData = 'email';

        return isLengthCorrect(value.length, 2, 100) && isMailCorrect(value);

      case 'Phone':
        typeData = 'tel';

        return isPhoneNumberCorrect(value);

      default:
        return true;
    }
  };

  return (
    <div className="input">
      <div className="input__data">
        <input
          type={typeData}
          className={classnames('input__field', { 'input__field--error': wasOnField && !handleError() })}
          required
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={() => (setWasOnField(true))}
        />

        <span
          className={classnames('input__label', { 'input__label--error': wasOnField && !handleError() })}
        >
          {label}
        </span>
      </div>

      {label === 'Phone' && (
        <div className={classnames('input__helper', { 'input__helper--error': wasOnField && !handleError() })}>
          +38 (XXX) XXX - XX - XX
        </div>
      )}

      {label === 'Your name' && wasOnField && !handleError() && (
        <div className="input__helper input__helper--error">
          The name must be at least 2 characters and max 60 characters
        </div>
      )}

      {label === 'Email' && wasOnField && !handleError() && (
        <div className="input__helper input__helper--error">
          The email must be a valid email address.
        </div>
      )}
    </div>
  );
};
