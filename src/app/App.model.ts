import { History } from 'history';
import { RouterState } from 'connected-react-router';

interface Session {
  username: string
}

export interface AppState {
  router: RouterState,
  session: Session
}

export interface AppProps {
  history: History
}