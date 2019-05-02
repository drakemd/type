import { ApiUrl, ApiMethod } from './../../common/constants/index';
import { LoginData } from './Login.model';
import { fetchData } from '../../core/rest-client/RestClient.service';

export function login(username: string, password: string): Promise<LoginData>{

    let headers: HeadersInit = 
    {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    let body = JSON.stringify({
        username: username,
        password: password
    });

    return fetchData(ApiUrl.AUTH_API_URL, ApiMethod.POST, headers, body);
}