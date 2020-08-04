// Third Party
import React, { FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

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
      <div className='sidebar'>
        <ul>
          <li>
            <Link to={routes.appsInfoPath()}>Home</Link>
          </li>
          <li>
            <Link to={routes.connectMethodPath()}>Connect</Link>
          </li>
          <li>
            <Link to={routes.createShipmentMethodPath()}>Create Shipment</Link>
          </li>
          <li>
            <Link to={routes.cancelShipmentsMethodPath()}>Cancel Shipment</Link>
          </li>
          <li>
            <Link to={routes.rateShipmentMethodPath()}>Rate Shipment</Link>
          </li>
          <li>
            <Link to={routes.trackShipmentMethodPath()}>Track Shipment</Link>
          </li>
          <li>
            <Link to={routes.createManifestMethodPath()}>Create Manifest</Link>
          </li>
          <li>
            <Link to={routes.schedulePickupMethodPath()}>Schedule Pickups</Link>
          </li>
          <li>
            <Link to={routes.cancelPickupsMethodPath()}>Cancel Pickups</Link>
          </li>
        </ul>
      </div>
      <div className='content'>
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
      </div>
    </Router>
  );
};

export default App;
