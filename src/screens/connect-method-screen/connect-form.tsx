// Third Party
import React, { FunctionComponent } from 'react';
import { withTheme, FormSubmit } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { JSONSchema7 } from 'json-schema';
import { isEqual } from 'lodash';
import axios from 'axios';

const Form = withTheme(AntDTheme);

interface Props {
  schema: JSONSchema7;
}

const handleSubmit = async (formSubmit: FormSubmit) => {
  console.log(formSubmit.formData);
  await axios.put('http://localhost:3000/connect', formSubmit.formData);
};

const ConnectFrom: FunctionComponent<Props> = ({ schema }) => {
  return <Form schema={schema} onSubmit={handleSubmit} />;
};

export default React.memo(ConnectFrom, function compare(
  { schema: prevSchema },
  { schema: newSchema },
) {
  return isEqual(prevSchema, newSchema);
});
