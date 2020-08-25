// Third Party
import React, { FunctionComponent } from 'react';
import { JSONSchema7 } from 'json-schema';

// Utils & Types
import { useApp } from '../../contexts/app-context';

// Components
import ConnectForm from './connect-form';
// import MethodNotImplementedMessage from '../../components/method-not-implemented-message';

const ConnectMethodScreen: FunctionComponent = () => {
  const { isLoading, isError, app } = useApp();

  if (!app?.connectionForm) return <h1>loading...</h1>;
  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>{isError}</h1>;

  return <ConnectForm schema={app?.connectionForm.dataSchema as JSONSchema7} />;
};

export default ConnectMethodScreen;
