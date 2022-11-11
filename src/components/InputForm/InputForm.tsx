import React from 'react';
import './InputForm.scss';

export const InputForm: React.FC = () => {
  return (
    <div className="input">
      <input type="text" className="input__field" />
      <div className="input__helper">+38 (XXX) XXX - XX - XX</div>
    </div>
  );
};
