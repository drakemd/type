import { ApiRequestStatus } from './../common/constants/index';
import { LOGIN } from './../pages/login/Login.actions';
import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { reduceApiRequestStatusOf } from '../core/rest-client/RestClient.reducers';

export interface ReduxState {
  loadStatus: ApiRequestStatus;
  username: string;
  password: string;
}

const AppReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  login: reduceApiRequestStatusOf(LOGIN)
});

export default AppReducer;