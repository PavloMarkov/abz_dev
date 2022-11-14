/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createRef, useState } from 'react';
import './FileInputForm.scss';
import classNames from 'classnames';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (obj: any) => void;
};

export const FileInputForm: React.FC<Props> = ({ onClick }) => {
  const [photo, setPhoto] = useState<null | any>(null);

  const fileInput = createRef<any>();
  const limitFile = 5 * 1048576;

  if (photo && (photo.size <= limitFile)) {
    onClick(photo);
  }

  const bigFile = photo && (photo.size > limitFile);

  return (
    <div>
      <label
        htmlFor="file"
        className={classNames('file', {
          filled: (photo !== null),
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
            setPhoto(fileInput.current.files[0]);
          }}
        />
        {photo === null ? 'Upload your photo' : photo.name}
      </label>
      {bigFile && (<span className="errorFile__msg">The photo may not be greater than 5 Mbytes.</span>)}
    </div>
  );
};
