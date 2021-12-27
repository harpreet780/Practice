import React from 'react';
import { Button } from './style';
const ButtonWrap = ({ name, background, hideText,color }) => {
  return (
    <div>
      <Button style={{ background: background ,color:color}}>{name}
        {hideText === true ? " abc" : null}</Button>
    </div>
  );
}
export default ButtonWrap;