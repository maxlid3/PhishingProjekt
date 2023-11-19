// OtherFile.ts
import React, { useState } from 'react';
import { Button } from './ButtonTest'; // Passe den Pfad entsprechend an

// Hier wird die Variable ForceStart definiert und initialisiert
let ForceStart = false;

export const OtherFileComponent: React.FC = () => {
  const [forceStart, setForceStart] = useState(ForceStart);

  const handleToggle = (value: boolean) => {
    setForceStart(value);
    // Hier kannst du den aktualisierten Wert von ForceStart verwenden oder exportieren
    console.log(`Aktualisierter ForceStart-Wert in OtherFileComponent: ${value}`);
  };

  return (
    <div>
      <h2>OtherFile Component</h2>
      {Button(handleToggle)}
    </div>
  );
};

// Hier kannst du die Variable ForceStart exportieren, wenn du sie in einer anderen Datei verwenden möchtest
export { ForceStart };