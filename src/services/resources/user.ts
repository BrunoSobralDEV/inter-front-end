import api from '../api';

export interface SignInData{
    email: string;
    password: string;
}

export interface SignUpData{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
//login - função assíncrona
export const signIn = async (data: SignInData) => {
  return api.post('/user/signin', data);
};

export const me = async () => {
  return api.get("/");
};

export const signUp = async (data: SignUpData) => {
  return api.post("/user/signup", data);
};