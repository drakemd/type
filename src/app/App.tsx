import React from 'react';
import './App.scss';
import { ConnectedRouter } from 'connected-react-router';
import { AppProps } from './App.model';
import routes from '../routes';

const App: React.FC<AppProps> = ({history}: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  );
}

export default App;
