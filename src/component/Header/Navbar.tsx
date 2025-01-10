import { FaArrowLeft } from "react-icons/fa";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import pics from "../../asset/loggg.png";
import pics1 from "../../asset/images/coins/red-coin.webp";
import { useNavigate } from "react-router-dom";

interface NabarProps {
  title: string;
  backRoute: string;
  logo: string;
}

const Navbar = ({ title, backRoute, logo }: NabarProps) => {
  const navigate = useNavigate();

  // const handleBackClick = () => {
  //   navigate(backRoute);
  // };

  return (
    <nav className="w-full fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-md backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center justify-center gap-2">
          {backRoute ? (
            <FaArrowLeft
              className="cursor-pointer"
              onClick={() => navigate(backRoute)}
            />
          ) : null}
          {logo ? (
            <img src={logo} alt="Logo" className="w-14 h-14" />
          ) : (
            <p>{title}</p>
          )}
        </div>

        {/* Menu Icons */}
        <div className="flex justify-center items-center space-x-4">
          {/* Replace with actual image sources */}
          <img src={pics} alt="icon 1" className="w-8 h-8" />
          <img src={pics1} alt="icon 2" className="w-8 h-8" />
          <div className="relative">
            <p className="absolute h-5 w-5 rounded-full bg-red-600 text-sm right-0">
              76
            </p>
            <LiaEnvelopeOpenTextSolid size={30} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
