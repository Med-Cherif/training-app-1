import AuthLayout from "../components/layout/auth-layout/AuthLayout";
import Button from "../components/ui/Button";
import Card, { CardBody, CardHeader, CardTitle } from "../components/ui/Card";
import Container from "../components/ui/Container";
import FormGroup from "../components/ui/FormGroup";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";

const Register = () => {
  return (
    <AuthLayout>
      <Container>
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
          </CardHeader>
          <CardBody>
            <form>
              <FormGroup>
                <Label>Name</Label>
                <Input />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input />
              </FormGroup>
              <Button>Register</Button>
            </form>
          </CardBody>
        </Card>
      </Container>
    </AuthLayout>
  );
};

export default Register;
