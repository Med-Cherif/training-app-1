import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import useAuthStore from "../stores/auth-store";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Dashboard = () => {
  const logout = useAuthStore((store) => store.logout);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetch Data");
  }, []);

  return (
    <div>
      <Container>
        <h2>Dashboard</h2>
        <div>
          <Button
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
