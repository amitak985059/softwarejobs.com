import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <Link to="/">
        <h1 className="text-3xl font-bold text-white">SoftwareJobs.com</h1>
      </Link>
      <ul className="flex items-center">
        <li className="mr-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li className="mr-4">
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
