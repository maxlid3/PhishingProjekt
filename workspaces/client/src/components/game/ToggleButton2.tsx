// OtherFile.ts
import React, { useState } from 'react';
//TODO cant find explicit Button export, since you have only one export in that file, just leave the braces
import { Button } from './ButtonTest'; // Passe den Pfad entsprechend an

// Hier wird die Variable ForceStart definiert und initialisiert
let ForceStart = false;

// TODO aber nicht genutzt, entweder typo oder unnötig in den array gepackt
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