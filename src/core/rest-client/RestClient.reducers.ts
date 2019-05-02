import { ApiClientAction } from './RestClient.actions';
import { ApiRequestStatus } from '../../common/constants';

export type ReduxState = ApiRequestStatus;
export const initialState = ApiRequestStatus.IDLE;

export function reduceApiRequestStatusOf<T extends string>(type: T) {
  return (state: ReduxState = initialState, action: ApiClientAction<T>): ReduxState => {
    if (action.type === type) {
      return action.status;
    }
    return state;
  };
}