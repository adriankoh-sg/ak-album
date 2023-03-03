import React, { useState } from 'react';
import HomePage from '@pages/home';

interface INumberProps {
  initValue: number;
}

const App = ({ initValue }: INumberProps): React.ReactNode => {
  const [value, setValue] = useState(initValue);

  const onIncrement = (): void => {
    setValue(value + 1);
  };

  const onDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      Number is {value}
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
      <HomePage />
    </div>
  );
};

export default App;
