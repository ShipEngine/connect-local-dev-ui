// Third Party
import React, { FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// } from '@ant-design/icons';

// Utils & Types
import routes from './routes';

// Screens
import AppInfoScreen from './screens/app-info-screen';
import CancelPickupsMethodScreen from './screens/cancel-pickups-method-screen';
import CancelShipmenstMethodScreen from './screens/cancel-shipments-method-screen';
import ConnectMethodScreen from './screens/connect-method-screen';
import CreateManifestMethodScreen from './screens/create-manifest-method-screen';
import CreateShipmentMethodScreen from './screens/create-shipment-method-screen';
import RateShipmentMethodScreen from './screens/rate-shipment-method-screen';
import SchedulePickupMethodScreen from './screens/schedule-pickup-method-screen';
import TrackShipmentMethodScreen from './screens/track-shipment-method-screen';

// Styles & Assets
import './app.css';

const App: FunctionComponent = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

const AppLayout = () => {
  const location = useLocation();
  return (
    <Layout>
      {/* <Layout.Header>
          <Menu
            theme='light'
            mode='horizontal'
            defaultSelectedKeys={['2']}></Menu>
        </Layout.Header> */}
      <Layout>
        <Layout.Sider
          width={220}
          className='site-layout-background'
          theme='light'>
          <Menu
            mode='inline'
            selectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key={routes.appsInfoPath()}>
              <Link to={routes.appsInfoPath()}>App Info</Link>
            </Menu.Item>
            <Menu.Item key={routes.connectMethodPath()}>
              <Link to={routes.connectMethodPath()}>Connect</Link>
            </Menu.Item>
            <Menu.Item key={routes.createShipmentMethodPath()}>
              <Link to={routes.createShipmentMethodPath()}>
                Create Shipment
              </Link>
            </Menu.Item>
            <Menu.Item key={routes.cancelShipmentsMethodPath()}>
              <Link to={routes.cancelShipmentsMethodPath()}>
                Cancel Shipment
              </Link>
            </Menu.Item>
            <Menu.Item key={routes.rateShipmentMethodPath()}>
              <Link to={routes.rateShipmentMethodPath()}>Rate Shipment</Link>
            </Menu.Item>
            <Menu.Item key={routes.trackShipmentMethodPath()}>
              <Link to={routes.trackShipmentMethodPath()}>Track Shipment</Link>
            </Menu.Item>
            <Menu.Item key={routes.createManifestMethodPath()}>
              <Link to={routes.createManifestMethodPath()}>
                Create Manifest
              </Link>
            </Menu.Item>
            <Menu.Item key={routes.schedulePickupMethodPath()}>
              <Link to={routes.schedulePickupMethodPath()}>
                Schedule Pickups
              </Link>
            </Menu.Item>
            <Menu.Item key={routes.cancelPickupsMethodPath()}>
              <Link to={routes.cancelPickupsMethodPath()}>Cancel Pickups</Link>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item key='1'>
              <Link to={routes.appsInfoPath()}>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item key='2'>List</Breadcrumb.Item>
          </Breadcrumb>
          <Layout.Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              height: '100vh',
            }}>
            <Switch>
              <Route exact path={routes.appsInfoPath()}>
                <AppInfoScreen />
              </Route>

              <Route path={routes.connectMethodPath()}>
                <ConnectMethodScreen />
              </Route>

              <Route path={routes.createShipmentMethodPath()}>
                <CreateShipmentMethodScreen />
              </Route>

              <Route path={routes.cancelShipmentsMethodPath()}>
                <CancelShipmenstMethodScreen />
              </Route>

              <Route path={routes.rateShipmentMethodPath()}>
                <RateShipmentMethodScreen />
              </Route>

              <Route path={routes.trackShipmentMethodPath()}>
                <TrackShipmentMethodScreen />
              </Route>

              <Route path={routes.createManifestMethodPath()}>
                <CreateManifestMethodScreen />
              </Route>

              <Route path={routes.schedulePickupMethodPath()}>
                <SchedulePickupMethodScreen />
              </Route>

              <Route path={routes.cancelPickupsMethodPath()}>
                <CancelPickupsMethodScreen />
              </Route>

              <Redirect to={routes.appsInfoPath()}></Redirect>
            </Switch>
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
