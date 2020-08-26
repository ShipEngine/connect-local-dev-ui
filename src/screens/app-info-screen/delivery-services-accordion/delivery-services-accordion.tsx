// Third Party
import React, { FunctionComponent } from 'react';
import { Collapse, Descriptions } from 'antd';

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
          <Descriptions column={2}>
            <Descriptions.Item label='Name'>
              {deliveryService.name}
            </Descriptions.Item>
            <Descriptions.Item label='Description'>
              {deliveryService.description}
            </Descriptions.Item>
            <Descriptions.Item label='Class'>
              {deliveryService.class}
            </Descriptions.Item>
            <Descriptions.Item label='Grade'>
              {deliveryService.grade}
            </Descriptions.Item>
            <Descriptions.Item label='Code'>
              {deliveryService.code}
            </Descriptions.Item>
            <Descriptions.Item label='Fulfillment Service'>
              {deliveryService.fulfillmentService}
            </Descriptions.Item>
            <Descriptions.Item label='Service Area'>
              {deliveryService.serviceArea}
            </Descriptions.Item>
            <Descriptions.Item label='Is Consolidation Service'>
              {deliveryService.isConsolidationService.toString()}
            </Descriptions.Item>
            <Descriptions.Item label='Allows Multiple Packages'>
              {deliveryService.allowsMultiplePackages.toString()}
            </Descriptions.Item>
            <Descriptions.Item label='Is Insurable'>
              {deliveryService.isInsurable.toString()}
            </Descriptions.Item>
            <Descriptions.Item label='Is Trackable'>
              {deliveryService.isTrackable.toString()}
            </Descriptions.Item>
            <Descriptions.Item label='Manifest Type'>
              {deliveryService.manifestType}
            </Descriptions.Item>
            <Descriptions.Item label='Supports Returns'>
              {deliveryService.supportsReturns}
            </Descriptions.Item>
            <Descriptions.Item label='Has Sandbox'>
              {deliveryService.hasSandbox.toString()}
            </Descriptions.Item>
            <Descriptions.Item label='Label Formats'>
              {deliveryService.labelFormats.join(', ')}
            </Descriptions.Item>
            <Descriptions.Item label='Label Sizes'>
              {deliveryService.labelSizes.join(', ')}
            </Descriptions.Item>
          </Descriptions>
          Packaging
          <Collapse accordion>
            {deliveryService.packaging.map((p, index) => (
              <Collapse.Panel header={p.name} key={`package-${index}`}>
                <Descriptions column={2}>
                  <Descriptions.Item label='Name'>{p.name}</Descriptions.Item>
                  <Descriptions.Item label='Description'>
                    {p.description}
                  </Descriptions.Item>
                  <Descriptions.Item label='Class'>
                    {deliveryService.class}
                  </Descriptions.Item>
                  <Descriptions.Item label='Grade'>
                    {deliveryService.grade}
                  </Descriptions.Item>
                </Descriptions>
              </Collapse.Panel>
            ))}
          </Collapse>
        </Collapse.Panel>
      ))}
    </Collapse>
  );
};

export default DeliveryServicesAccordion;

// public readonly originCountries: readonly Country[];
// public readonly destinationCountries: readonly Country[];
// public readonly deliveryConfirmations: readonly DeliveryConfirmation[];
