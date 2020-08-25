// Third Party
import { Modal } from 'antd';
import React, { FunctionComponent } from 'react';
import { withTheme, FormSubmit } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { JSONSchema7 } from 'json-schema';
import { isEqual } from 'lodash';
import axios from 'axios';

// Components
import Spinner from '../../components/spinner';

const Form = withTheme(AntDTheme);

interface Props {
  schema: JSONSchema7;
}
const ConnectFrom: FunctionComponent<Props> = ({ schema }) => {
  const [modalVisible, setModalVisible] = React.useState(true);

  const handleSubmit = async (formSubmit: FormSubmit) => {
    setModalVisible(true);
    await axios.put('http://localhost:3000/connect', formSubmit.formData);
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
          setModalVisible(false);
        }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spinner />
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
