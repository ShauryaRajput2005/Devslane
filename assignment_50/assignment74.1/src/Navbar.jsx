import { Link } from "react-router-dom";

function Navbar({ user, setUser, setisVerified }) {
  console.log("User in Navbar:", user);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setisVerified(false);
    showAlert("Logged out successfully ✅", "success"); // optional alert
    navigate("/login"); // force redirect to login page
  };


  return (
    <div className='fixed top-0 w-screen bg-white shadow-md z-50 bg-[url("https://plus.unsplash.com/premium_photo-1673029926917-40a9e3336b5b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover'>
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
            className="h-10"
          />
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {user?.full_name && (
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-800">
                Welcome, <span className="font-bold">{user.full_name}</span>
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded-full text-sm shadow hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          )}

          {/* Cart Link */}
          <Link
            to="/cart"
            className="text-sm font-semibold text-gray-700 hover:text-red-500"
          >
            🛒 Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
