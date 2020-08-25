// Third Party
import React, { FunctionComponent } from 'react';
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { JSONSchema7 } from 'json-schema';
import { isEqual } from 'lodash';

const Form = withTheme(AntDTheme);

interface Props {
  schema: JSONSchema7;
}

const ConnectFrom: FunctionComponent<Props> = ({ schema }) => {
  console.log('ConnectFrom RENDER!');

  return <Form schema={schema} />;
};

export default React.memo(ConnectFrom, function compare(
  { schema: prevSchema },
  { schema: newSchema },
) {
  return isEqual(prevSchema, newSchema);
});
