import React, { useState } from 'react';

const GameCode = () => {
 const [stringToAppend, setStringToAppend] = useState('');

 const handleClick = () => {
    window.location.href = `http://localhost:3033/?lobby=${stringToAppend}`;
 };

 const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setStringToAppend(event.target.value);
 };

 return (
    <div>
      <input
        type="text"
        value={stringToAppend}
        onChange={handleInputChange}
        placeholder="Append to Google URL"
      />
      <button onClick={handleClick}>Go to Google</button>
    </div>
 );
};

export default GameCode;
