// Third Party
import React, { FunctionComponent } from 'react';
// import SyntaxHighlighter from 'react-syntax-highlighter';
import axios, { AxiosError } from 'axios';
import { JSONSchema7 } from 'json-schema';
import { Modal, Divider } from 'antd';
import { Theme as AntDTheme } from '@rjsf/antd';
import { isEqual } from 'lodash';
import { withTheme, FormSubmit } from '@rjsf/core';
import JSONPretty from 'react-json-pretty';

// Components
import Spinner from '../../components/spinner';

import 'react-json-pretty/themes/adventure_time.css';

const Form = withTheme(AntDTheme);

interface Props {
  schema: JSONSchema7;
}
const ConnectFrom: FunctionComponent<Props> = ({ schema }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [requestInFlight, setRequestInFlight] = React.useState(false);
  const [request, setRequest] = React.useState({});
  const [response, setResponse] = React.useState({});

  const handleSubmit = async (formSubmit: FormSubmit) => {
    setRequest(formSubmit.formData);
    console.log(formSubmit.formData);
    setRequestInFlight(true);
    setModalVisible(true);
    let response;
    try {
      const { data } = await axios.put(
        'http://localhost:3000/connect',
        formSubmit.formData,
      );
      response = data;
    } catch (error) {
      const errorWithType = error as AxiosError;

      response = errorWithType.response?.data;
    }

    setResponse(response);
    setRequestInFlight(false);
  };

  return (
    <>
      <Modal
        title='Request Logs'
        footer={null}
        width={900}
        visible={modalVisible}
        closable={true}
        onCancel={() => {
          setRequest({});
          setResponse({});
          setModalVisible(false);
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          {requestInFlight ? (
            <Spinner />
          ) : (
              <>
                <h4>Request</h4>
                <JSONPretty
                  id='json-pretty'
                  data={request}
                  style={{
                    maxWidth: '850px',
                  }}></JSONPretty>

                <Divider plain />

                <h4>Response</h4>
                <JSONPretty
                  id='json-pretty'
                  data={response}
                  style={{
                    maxWidth: '850px',
                  }}></JSONPretty>
              </>
            )}
        </div>
      </Modal>
      <Form schema={schema} onSubmit={handleSubmit} />
    </>
  );
};

export default React.memo(ConnectFrom, function compare(
  { schema: prevSchema },
  { schema: newSchema },
) {
  return isEqual(prevSchema, newSchema);
});
