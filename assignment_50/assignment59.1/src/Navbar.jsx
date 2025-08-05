import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 w-screen bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Amazon Logo (clickable, goes to homepage) */}
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
            className="h-10"
          />
        </Link>

        {/* Cart Link */}
        <Link
          to="/cart"
          className="text-sm font-semibold text-gray-700 hover:text-red-500"
        >
          🛒 Cart
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
