import { ApiUrl, RequestMethod } from './../../common/constants/';
import { LoginData } from './Login.model';
import { httpRequest } from '../../core/rest-client/RestClient.service';

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

    return httpRequest(ApiUrl.AUTH_API_URL, RequestMethod.POST, headers, body);
}