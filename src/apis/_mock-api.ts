import { LoginFieldValues } from "../schemas/login-schema";
import { RegisterFieldValues } from "../schemas/register-schema";

const loginResponse = {
  data: {
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30",
  },
};

const delay = async () => {
  return new Promise((resolve) => setTimeout(resolve, 2000));
};

export const loginApi = async (data: LoginFieldValues) => {
  await delay();

  if (data.email === "email@email.com" && data.password === "123456") {
    return loginResponse;
  }

  throw new Error("Invalid credentials");
};

export const registerApi = async (data: RegisterFieldValues) => {
  await delay();

  return {
    data: {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30",
      user: {
        name: data.name,
        email: data.email,
      },
    },
  };
};
