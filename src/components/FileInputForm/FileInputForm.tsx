/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createRef } from 'react';
import './FileInputForm.scss';
import classNames from 'classnames';

type Props = {
  addFile: (obj: any) => void;
  foto: any;
};

export const FileInputForm: React.FC<Props> = ({ addFile, foto }) => {
  const fileInput = createRef<any>();
  const limitFile = 5 * 1048576;
  const bigFile = foto && (foto.size > limitFile);

  return (
    <div>
      <label
        htmlFor="file"
        className={classNames('file', {
          filled: (foto !== null),
          errorFile: bigFile,
        })}
      >
        <input
          type="file"
          id="file"
          accept=".jpg, .jpeg"
          className="file__input"
          ref={fileInput}
          onChange={() => {
            addFile(fileInput.current.files[0]);
          }}
        />
        {foto === null ? 'Upload your photo' : foto.name}
      </label>

      {bigFile && (<span className="errorFile__msg">The photo may not be greater than 5 Mbytes.</span>)}
    </div>
  );
};
