import { LoginFieldValues } from "../../schemas/login-schema";
import { RegisterFieldValues } from "../../schemas/register-schema";
import { loginApi, registerApi } from "../_mock-api";

const authClient = {
  async login(data: LoginFieldValues) {
    // const response = await httpClient.post('/login', data)
    // return response.data
    const response = await loginApi(data);
    return response.data;
  },

  async register(data: RegisterFieldValues) {
    const response = await registerApi(data);
    return response.data;
  },
};

export default authClient;
