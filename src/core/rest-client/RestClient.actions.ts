import { ApiRequestStatus } from '../../common/constants';

interface StartedApiRequestAction<T> {
  type: T;
  status: ApiRequestStatus.LOADING;
}
  
interface SucceededApiRequestAction<T, P = any> {
  type: T;
  status: ApiRequestStatus.SUCCEEDED;
  payload: P;
}
  
interface FailedApiRequestAction<T> {
  type: T;
  status: ApiRequestStatus.FAILED;
  payload: Error;
}

function startedApiRequestAction<T>(type: T): StartedApiRequestAction<T> {
  return {
    type,
    status: ApiRequestStatus.LOADING,
  };
}

function succeededApiRequestAction<T, P>(type: T, payload: P): SucceededApiRequestAction<T, P> {
  return {
    type,
    status: ApiRequestStatus.SUCCEEDED,
    payload,
  };
}

function failedApiRequestAction<T>(type: T, error: Error): FailedApiRequestAction<T> {
  return {
    type,
    status: ApiRequestStatus.FAILED,
    payload: error,
  };
}

export function callApi<T, P>(type: T, action: (...args: any[]) => Promise<P>, ...args: any[]) {
  return async (dispatch: any) => {
    dispatch(startedApiRequestAction(type));
    try {
      const payload = await action(...args);
      dispatch(succeededApiRequestAction(type, payload));
    } catch (error) {
      dispatch(failedApiRequestAction(type, error));
    }
  };
}
  
export type ApiClientAction<T, P = any> = StartedApiRequestAction<T> | SucceededApiRequestAction<T, P> | FailedApiRequestAction<T>;