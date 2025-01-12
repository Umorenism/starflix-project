import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import FeedPage from "./component/pages/FeedPage.tsx";
import MarketPlace from "./component/pages/MarketPlace.tsx";
import Navbar from "./component/Header/Navbar.tsx";
import { Footer } from "./component/footer/Footer.tsx";
import ChatPage from "./component/pages/ChatPage.tsx";
import Login from "./auth/Login.tsx";
import ProfileCard from "./component/pages/ProfilePage.tsx";
import ChatBox from "./component/pages/chatBox.tsx";
import Signup from "./auth/Signup.tsx";
import OtpVerify from "./auth/Otp.tsx";
import PerformedTasks from "./component/PerformTask.tsx";
import TaskDetailPage from "./component/TaskDetailPage.tsx";
import Wallet from "./component/pages/Wallet.tsx";
import Invite from "./component/pages/Invite.tsx";
import EditProfile from "./component/pages/EditProfile.tsx";
import Stake from "./component/pages/Stake.tsx";
import Upgrade from "./component/pages/Upgrade.tsx";
import EarnAsCreator from "./component/pages/EarnAsCreator.tsx";
import pic from "../src/asset/loggg.png";
import SetPassword from "./auth/SetPassword.tsx";
import UserProfile from "./auth/UserProfile.tsx";
import ProfilePhotoUpload from "./auth/ProfileUploadImage.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Navbar title="" logo={pic} backRoute="" />
            <FeedPage />
            <Footer />
          </>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/confirm",
        element: <SetPassword />,
      },
      {
        path: "/userprofile",
        element: <UserProfile />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/uploadimage",
        element: <ProfilePhotoUpload />,
      },
      {
        path: "/performtasks",
        element: <PerformedTasks />,
      },
      {
        path: "/taskdetail",
        element: (
          <>
            <Navbar logo="" title="Task Details" backRoute="/performtasks" />
            <TaskDetailPage tasktitle="" />
            <Footer />
          </>
        ),
      },
      {
        path: "/otp",
        element: <OtpVerify />,
      },
      {
        path: "/chatbox",
        element: (
          <>
            <Navbar logo="" title="Chat" backRoute="/chat" />
            <ChatBox />
            <Footer />
          </>
        ),
      },
      {
        path: "/marketplace",
        element: (
          <>
            <Navbar logo="" title="Market Place" backRoute="/" />
            <MarketPlace />
            <Footer />
          </>
        ),
      },
      {
        path: "/wallet",
        element: (
          <>
            <Navbar logo="" title="Wallet" backRoute="/" />
            <Wallet />
            <Footer />
          </>
        ),
      },
      {
        path: "/invite",
        element: (
          <>
            <Navbar logo="" title="Invite" backRoute="/" />
            <Invite />
            <Footer />
          </>
        ),
      },
      {
        path: "/editprofile",
        element: (
          <>
            <Navbar logo="" title="Edit Profile" backRoute="/profile" />
            <EditProfile />
            <Footer />
          </>
        ),
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path: "/stake",
        element: (
          <>
            <Navbar logo="" title="Stake" backRoute="/" />
            <Stake />
            <Footer />
          </>
        ),
      },
      {
        path: "/upgrade",
        element: (
          <>
            <Navbar logo="" title="Upgrade" backRoute="/wallet" />
            <Upgrade />
            <Footer />
          </>
        ),
      },
      {
        path: "/earn",
        element: (
          <>
            <Navbar logo="" title="Earn as Creator" backRoute="/" />
            <EarnAsCreator />
            <Footer />
          </>
        ),
      },
      {
        path: "/profile",
        element: (
          <>
            <Navbar logo="" title="Profile" backRoute="/" />
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
