import Button from "../../../ui/Button";
import Container from "../../../ui/Container";

const Header = () => {
  return (
    <header>
      <h2>Logo</h2>
      <nav>
        <ul>
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <Button>Logout</Button>
          </li>
          {/* <li>
            <a href="">Register</a>
          </li>
          <li>
            <a href="">Login</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
