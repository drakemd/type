import { LOGIN } from './../pages/login/Login.actions';
import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { reduceApiRequestStatusOf } from '../core/rest-client/RestClient.reducers';

const AppReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  reqStatus: reduceApiRequestStatusOf(LOGIN)
});

export default AppReducer;