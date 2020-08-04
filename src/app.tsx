import React, { FunctionComponent } from 'react';
import './app.css';

const App: FunctionComponent = () => {
  return (
    <>
      <div className='sidebar'>
        Min: 150px
        <br />
        Max: 25%
      </div>
      <p className='content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla
        architecto maxime modi nisi. Quas saepe dolorum, architecto quia fugit
        nulla! Natus, iure eveniet ex iusto tempora animi quibusdam porro?
      </p>
    </>
  );
};

export default App;
