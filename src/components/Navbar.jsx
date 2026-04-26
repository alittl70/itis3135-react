import { Link } from "react-router-dom";
 
/*
 * Navbar.jsx
 * Author: Alanah Little
 * Description: Site-wide navigation bar with internal React Router links
 *              and external links for standalone pages.
 */
 
function Navbar() {
  return (
    <nav className="site-nav">
      <Link to="/">Home</Link>
      <Link to="/introduction">Introduction</Link>
      <Link to="/contract">Contract</Link>
      <Link to="/slideshow">Slideshow</Link>
 
      {/* external links stay as <a> */}
      <a href="/itis3135/">ITIS 3135</a>
      <a href="/survey/">Survey</a>
      <a href="/cards/">Cards</a>
      <a href="/inventory/">Inventory</a>
      <a href="/documentation/">Documentation</a>
      <a href="/product/">Product</a>
    </nav>
  );
}
 
export default Navbar;