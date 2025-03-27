import { Controller, useForm } from "react-hook-form";
import AuthLayout from "../components/layout/auth-layout/AuthLayout";
import Button from "../components/ui/Button";
import Card, { CardBody, CardHeader, CardTitle } from "../components/ui/Card";
import Container from "../components/ui/Container";
import FormGroup from "../components/ui/FormGroup";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";
import loginSchema, { LoginFieldValues } from "../schemas/login-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../components/ui/ErrorMessage";
import { Link, useNavigate } from "react-router";
import { useLoginMutation } from "../apis/auth/auth-apis";

const Login = () => {
  const mutation = useLoginMutation();

  const navigate = useNavigate();

  const form = useForm<LoginFieldValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginFieldValues) => {
    mutation.mutate(values, {
      onSuccess() {
        navigate("/");
      },
    });
  };

  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardBody>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <ErrorMessage message={mutation.error?.message} />
            <FormGroup>
              <Label>Email</Label>
              <Input {...form.register("email")} />
              <ErrorMessage message={form.formState.errors.email?.message} />
            </FormGroup>
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => {
                return (
                  <FormGroup>
                    <Label>Password</Label>
                    <Input {...field} />
                    <ErrorMessage message={fieldState.error?.message} />
                  </FormGroup>
                );
              }}
            />

            <div>
              <p>
                New here? <Link to={"/register"}>Open new account</Link>
              </p>
            </div>

            <Button isLoading={mutation.isPending}>Login</Button>
          </form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Login;
