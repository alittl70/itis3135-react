import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/contract">Contract</Link> |{" "}
      <Link to="/fcc">FCC</Link>
    </nav>
  );
}

export default Navbar;