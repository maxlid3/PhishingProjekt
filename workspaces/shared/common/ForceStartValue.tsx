// ForceStartValue.tsx
let forceStartValue: boolean = false;

export const updateForceStartValue = (value: boolean) => {
  forceStartValue = value;
  console.log('FSV: Force Start Value:', forceStartValue);
};

export const getForceStartValue = () => {
  return forceStartValue;
};