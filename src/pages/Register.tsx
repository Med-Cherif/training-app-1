import { useForm } from "react-hook-form";
import AuthLayout from "../components/layout/auth-layout/AuthLayout";
import Button from "../components/ui/Button";
import Card, { CardBody, CardHeader, CardTitle } from "../components/ui/Card";
import Container from "../components/ui/Container";
import FormGroup from "../components/ui/FormGroup";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";
import ErrorMessage from "../components/ui/ErrorMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema, {
  RegisterFieldValues,
} from "../schemas/register-schema";
import { Link, useNavigate } from "react-router";
import { useRegisterMutation } from "../apis/auth/auth-apis";

const Register = () => {
  const mutation = useRegisterMutation();

  const navigate = useNavigate();

  const form = useForm<RegisterFieldValues>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const {
    name: nameError,
    email: emailError,
    password: passwordError,
  } = form.formState.errors;

  const onSubmit = (values: RegisterFieldValues) => {
    mutation.mutate(values, {
      onSuccess() {
        navigate("/");
      },
    });
    // console.log({ values });
  };

  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardBody>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormGroup>
              <Label>Name</Label>
              <Input {...form.register("name")} />
              <ErrorMessage message={nameError?.message} />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input {...form.register("email")} />
              <ErrorMessage message={emailError?.message} />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input {...form.register("password")} />
              <ErrorMessage message={passwordError?.message} />
            </FormGroup>

            <div>
              <p>
                Already have account? <Link to={"/login"}>Login</Link>
              </p>
            </div>

            <Button isLoading={mutation.isPending}>Register</Button>
          </form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Register;
