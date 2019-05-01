import { History } from 'history';
import { RouterState } from 'connected-react-router';

export interface AppState {
  router: RouterState
}

export interface AppProps {
  history: History
}