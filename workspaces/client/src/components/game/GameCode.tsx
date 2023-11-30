import React, { useState } from 'react';

const GameCode = () => {
 const [stringToAppend, setStringToAppend] = useState('');

 //hier richtiger Website verlinkung einfügen
 const handleClick = () => {
    window.location.href = `http://localhost:3033/?lobby=${stringToAppend}`;
 };

 const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setStringToAppend(event.target.value);
 };

 return (
    <div>
      <input className="btn"
        type="text"
        value={stringToAppend}
        onChange={handleInputChange}
        placeholder="Lobbycode"
      />
      <br/>
      <button className="btn" onClick={handleClick}>Lobby Join</button>
    </div>
 );
};

export default GameCode;