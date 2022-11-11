import React from 'react';
import { Position } from '../../types/Position';
import './RadioInputForm.scss';

type Props = {
  position: Position;
  changePositionID: (id: number) => void;
  checked: boolean;
};

export const RadioInputForm: React.FC<Props> = ({ position, checked, changePositionID }) => {
  return (
    <div className="radio-input">
      <label
        htmlFor={position.name}
        className="radio-input__radio"
      >
        <input
          type="radio"
          id={position.name}
          name="position"
          value={position.id}
          className="radio-input__radio-input"
          checked={checked}
          onChange={() => changePositionID(position.id)}
        />
        {position.name}
        <span className="radio-input__radio-span"></span>
      </label>
    </div>
  );
};
