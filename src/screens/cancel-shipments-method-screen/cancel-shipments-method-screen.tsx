// Third Party
import React, { FunctionComponent } from 'react';

// Components
import MethodNotImplementedMessage from '../../components/method-not-implemented-message';

const CancelShipmenstMethodScreen: FunctionComponent = () => {
  return (
    <MethodNotImplementedMessage
      message={
        <span>
          We are working on something awesome for this page! If you woul like to
          learn more about the <code>cancelShipments</code> method{' '}
          <a
            href='https://shipenginestag.wpengine.com/docs/integration-platform/reference/methods/cancel-shipments/'
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

export default CancelShipmenstMethodScreen;
