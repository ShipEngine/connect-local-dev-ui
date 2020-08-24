// Third Party
import React, { FunctionComponent } from 'react';
import { Descriptions } from 'antd';
// import { PlaySquareOutlined } from '@ant-design/icons';

// Utils & Types
import { useApp } from '../../contexts/app-context';

// Components
import DeliveryServicesAccordion from './delivery-services-accordion';

const AppInfoScreen: FunctionComponent = () => {
  const { app } = useApp();

  return (
    <>
      <Descriptions title={app?.name}>
        <Descriptions.Item label='ID'>{app?.id}</Descriptions.Item>
        <Descriptions.Item label='SDK Version'>
          {app?.sdkVersion}
        </Descriptions.Item>
        <Descriptions.Item label='App Type'>{app?.type}</Descriptions.Item>
        <Descriptions.Item label='Description'>
          {app?.description}
        </Descriptions.Item>
        <Descriptions.Item label='Website'>
          <a href={(app?.websiteURL as unknown) as string}>{app?.websiteURL}</a>
        </Descriptions.Item>
        <Descriptions.Item label='Manifest Locations'>
          {app?.manifestLocations}
        </Descriptions.Item>
        <Descriptions.Item label='Manifest Shipments'>
          {app?.manifestShipments}
        </Descriptions.Item>
        <Descriptions.Item label='Manifest Type'>
          {app?.manifestType}
        </Descriptions.Item>
        <Descriptions.Item label='Supports Returns'>
          {app?.supportsReturns}
        </Descriptions.Item>
      </Descriptions>

      <Descriptions title={'Manifest (package.json)'}>
        <Descriptions.Item label='Name'>{app?.manifest.name}</Descriptions.Item>
        <Descriptions.Item label='Version'>
          {app?.manifest.version}
        </Descriptions.Item>
        {/* <Descriptions.Item label='Main'>{app?.manifest.main}</Descriptions.Item> */}
      </Descriptions>

      {app?.icon && <img src={app?.icon} alt='carrier app icon' />}

      {app?.deliveryServices && (
        <DeliveryServicesAccordion deliveryServices={app?.deliveryServices} />
      )}
    </>
  );
};

export default AppInfoScreen;
