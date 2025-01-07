import { FaArrowLeft, FaBell } from "react-icons/fa";
import pics from "../../asset/loggg.png";

interface NabarProps {
  title: string;
}

const Navbar = ({ title }: NabarProps) => {
  return (
    <nav className="w-full fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-md backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center justify-center gap-2">
          <FaArrowLeft />
          <p>{title}</p>
        </div>

        {/* Menu Icons */}
        <div className="flex items-center space-x-4">
          {/* Replace with actual image sources */}
          <img src={pics} alt="icon 1" className="w-6 h-6" />
          <img src={pics} alt="icon 2" className="w-6 h-6" />
          <div className="relative">
            <p className="absolute h-5 w-5 rounded-full bg-red-600 text-sm right-0">
              76
            </p>
            <FaBell size={30} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
