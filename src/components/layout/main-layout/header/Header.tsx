import { Link } from "react-router";
import Button from "../../../ui/Button";
import Container from "../../../ui/Container";
import useAuthStore from "../../../../stores/auth-store";

const Header = () => {
  const { accessToken, logout } = useAuthStore();

  return (
    <header>
      <h2>Logo</h2>
      <nav>
        <ul>
          {accessToken ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Button onClick={() => logout()}>Logout</Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
