// Third Party
import React, { FunctionComponent } from 'react';
// import { withTheme } from '@rjsf/core';
// import { Theme as AntDTheme } from '@rjsf/antd';
import Form from '@rjsf/core';
import { JSONSchema7 } from 'json-schema';

// Utils & Types
import { useApp } from '../../contexts/app-context';

// Components
// import MethodNotImplementedMessage from '../../components/method-not-implemented-message';

const ConnectMethodScreen: FunctionComponent = () => {
  const { app } = useApp();

  console.log(app?.connectionForm);

  if (!app?.connectionForm) return <h1>loading...</h1>;
  return <Form schema={app?.connectionForm.dataSchema as JSONSchema7} />;
};

export default ConnectMethodScreen;
