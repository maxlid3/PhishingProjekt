// ButtonTest.tsx
import React, { useState, useEffect } from 'react';
import { ButtonState } from './ButtonState'
import { updateForceStartValue } from '@shared/common/ForceStartValue';

export const ButtonTest = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const buttonState = ButtonState.getInstance();
    setIsActive(buttonState.getIsActive());
  }, []);

  const handleClick = () => {
    const buttonState = ButtonState.getInstance();
    buttonState.toggleState();
    setIsActive(buttonState.getIsActive());
    updateForceStartValue(buttonState.getIsActive());
  };

  return (
    <button onClick={handleClick}>
      {isActive ? 'Deactivate' : 'Activate'} Force Start
    </button>
  );
};