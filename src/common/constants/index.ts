export enum ApiRequestStatus{
    IDLE = 'IDLE',
    LOADING = 'LOADING',
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED'
}

export enum ApiMethod{
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export const ApiUrl = {
    AUTH_API_URL: 'https://moqmulatorv2.azurewebsites.net/api2/login'
}