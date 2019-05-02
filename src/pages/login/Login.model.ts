import { loginAction } from "./Login.actions";

export interface LoginState{
    username: string;
    password: string;
    showPassword: boolean;
}

export interface LoginProps{
    login: typeof loginAction;
}

export interface LoginData{
    username: string;
}