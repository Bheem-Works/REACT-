import React from 'react';
import PropOne from './PropOne';

const MainProp = () => {
  const user = {
    name:'miso',
    food:'eggs',
    skins:'white'
  }; 

  return (
    <div>
      <PropOne user={user} />
    </div>
  );
}

export default MainProp;
