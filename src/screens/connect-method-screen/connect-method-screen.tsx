// Third Party
import React, { FunctionComponent } from 'react';

// Components
import MethodNotImplementedMessage from '../../components/method-not-implemented-message';

const ConnectMethodScreen: FunctionComponent = () => {
  return (
    <MethodNotImplementedMessage
      message={
        <span>
          We are working on something awesome for this page! If you woul like to
          learn more about the <code>connect</code> method{' '}
          <a
            href='https://shipenginestag.wpengine.com/docs/integration-platform/reference/methods/connect/'
            target='_blank'
            rel='noopener noreferrer'>
            you can find the docs here
          </a>
          .
        </span>
      }
    />
  );
};

export default ConnectMethodScreen;
