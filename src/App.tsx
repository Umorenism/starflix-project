import { Outlet } from "react-router-dom";
// import { Footer } from "./component/footer/Footer";
// import Navbar from "./component/Header/Navbar";

export const App = () => {
  return (
    <>
      <main className="">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};
