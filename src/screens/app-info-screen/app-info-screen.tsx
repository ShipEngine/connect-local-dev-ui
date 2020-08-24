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
          <p>{app?.description}</p>
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
      </Descriptions>

      <Descriptions title={'Images'}>
        <Descriptions.Item>
          {app?.logo && (
            <div>
              <h4>logo width: 250px</h4>
              <img
                src={app?.logo}
                style={{ width: '250px' }}
                alt='carrier app icon'
              />
            </div>
          )}
        </Descriptions.Item>
        <Descriptions.Item>
          {app?.logo && (
            <div>
              <h4>logo width: 150px</h4>
              <img
                src={app?.logo}
                style={{ width: '150px' }}
                alt='carrier app icon'
              />
            </div>
          )}
        </Descriptions.Item>
        <Descriptions.Item>
          {app?.logo && (
            <div>
              <h4>logo width: 75px</h4>
              <img
                src={app?.logo}
                style={{ width: '75px' }}
                alt='carrier app icon'
              />
            </div>
          )}
        </Descriptions.Item>
        <Descriptions.Item label='Icon'>
          {app?.icon && (
            <div>
              <h4>icon</h4>
              <img
                src={app?.logo}
                style={{ width: '50px' }}
                alt='carrier app icon'
              />
            </div>
          )}
        </Descriptions.Item>
      </Descriptions>

      {app?.deliveryServices && (
        <DeliveryServicesAccordion deliveryServices={app?.deliveryServices} />
      )}
    </>
  );
};

export default AppInfoScreen;
