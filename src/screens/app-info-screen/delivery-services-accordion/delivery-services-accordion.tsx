// Third Party
import React, { FunctionComponent } from 'react';
import { Collapse } from 'antd';

// Utils & Types
import { DeliveryService } from '@shipengine/connect-sdk/lib/internal/carriers';

interface Props {
  deliveryServices: readonly DeliveryService[];
}

const DeliveryServicesAccordion: FunctionComponent<Props> = ({
  deliveryServices,
}) => {
  return (
    <Collapse accordion>
      {deliveryServices.map((deliveryService, index) => (
        <Collapse.Panel header={deliveryService.name} key={index}>
          <p>{deliveryService.description}</p>
        </Collapse.Panel>
      ))}
    </Collapse>
  );
};

export default DeliveryServicesAccordion;
