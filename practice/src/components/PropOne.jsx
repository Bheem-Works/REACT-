import React from 'react';

const PropOne = ({user}) => {
  return (
    <div>
      {/* Passing the user prop */}
      <p>user:{user.name}</p>
      <p>User skins : {user.skins} </p>
    </div>
  );
}

export default PropOne;
