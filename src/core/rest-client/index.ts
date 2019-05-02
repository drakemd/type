import { callApi, ApiClientAction } from './RestClient.actions';

export { callApi };
export type ApiClientAction<T, P = any> = ApiClientAction<T, P>;