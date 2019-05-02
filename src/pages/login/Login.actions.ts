import { LoginData } from './Login.model';
import { login } from './Login.service';
import { callApi, ApiClientAction } from '../../core/rest-client';

export const LOGIN = 'LOGIN';
export type LoadAction = ApiClientAction<typeof LOGIN, LoginData>;

export function loginAction(username: string, password: string) {
  return callApi(LOGIN, login, username, password);
}