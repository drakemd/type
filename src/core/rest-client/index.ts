import { callApi, ApiClientAction } from './RestClient.actions';
import { httpRequest } from './RestClient.service';

export { callApi, httpRequest };
export type ApiClientAction<T, P = any> = ApiClientAction<T, P>;