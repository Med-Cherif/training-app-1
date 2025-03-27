import { useMutation } from "@tanstack/react-query";
import { LoginFieldValues } from "../../schemas/login-schema";
import authClient from "./auth-client";
import useAuthStore from "../../stores/auth-store";
import { RegisterFieldValues } from "../../schemas/register-schema";

export const useLoginMutation = () => {
  const authSuccess = useAuthStore((store) => store.authSuccess);

  const mutation = useMutation({
    mutationFn: (variables: LoginFieldValues) => authClient.login(variables),
    onSuccess(data) {
      authSuccess(data.accessToken);
    },
    onError(error) {
      // const message = error.message;
      // console.log({ error: message });
    },
  });

  return mutation;
};

export const useRegisterMutation = () => {
  const authSuccess = useAuthStore((store) => store.authSuccess);

  const mutation = useMutation({
    mutationFn: (variables: RegisterFieldValues) =>
      authClient.register(variables),
    onSuccess(data) {
      authSuccess(data.accessToken);
    },
  });

  return mutation;
};
