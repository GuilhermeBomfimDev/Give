import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-mono font-bold text-lg">G</span>
            </div>
            <span className="font-mono font-bold text-xl text-gray-900">
              GIVE
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive("/")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive("/about")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/projects"
              className={`font-medium transition-colors ${
                isActive("/projects")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Projects
            </Link>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
