// main.tsx
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import FeedPage from "./component/pages/FeedPage.tsx";
import MarketPlace from "./component/pages/MarketPlace.tsx";
// import CreatePage from "./component/pages/CreatePage.tsx";
import Navbar from "./component/Header/Navbar.tsx";
import { Footer } from "./component/footer/Footer.tsx";
import ChatPage from "./component/pages/ChatPage.tsx";
import Login from "./auth/Login.tsx";

import ProfileCard from "./component/pages/ProfilePage.tsx";
import ChatBox from "./component/pages/chatBox.tsx";
import Signup from "./auth/Signup.tsx";
import OtpVerify from "./auth/Otp.tsx";
import PerformedTasks from "./component/PerformTask.tsx";
// import CreatePage from "./component/pages/CreatePage.tsx";

// Pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Navbar title="Feeds" />
            <FeedPage />
            <Footer />
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <Login />
          </>
        ),
      },
      {
        path: "/signup",
        element: (
          <>
            <Signup />
          </>
        ),
      },
      {
        path: "/performtasks",
        element: (
          <>
            <PerformedTasks />
          </>
        ),
      },
      {
        path: "/otp",
        element: (
          <>
            <OtpVerify />
          </>
        ),
      },
      {
        path: "/chatbox",
        element: (
          <>
            <Navbar title="Chat" />
            <ChatBox />
            <Footer />
          </>
        ),
      },
      {
        path: "/marketplace",
        element: (
          <>
            <Navbar title="Market place" />
            <MarketPlace />
            <Footer />
          </>
        ),
      },
      // {
      //   path: "/create",
      //   element: (
      //     <>
      //       <Navbar title="Create" />
      //       <CreatePage />
      //       <Footer />
      //     </>
      //   ),
      // },
      {
        path: "/chat",
        element: (
          <>
            <ChatPage />
          </>
        ),
      },
      {
        path: "/profile",
        element: (
          <>
            <Navbar title="Profile" />
            <ProfileCard />
            <Footer />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
