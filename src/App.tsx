import { Route, Routes } from "react-router-dom";

import DefaultLayout from "./layout";
import Home from "./pages/home";
import UserProfile from "./pages/userProfile";
import { useContext } from "react";
import { AppContext } from "./context/ContextProvider";
import ProtectedRoute from "./protectRouter";
import Category from "./pages/category";
import AuthorizedPage from "./pages/authorizedPage";
import WritingPage from "./pages/write";
import WrongPage from "./pages/wrongPage";
import About from "./pages/about";

const App = () => {
  const { isAuthenticated } = useContext(AppContext);

  return (
    <Routes>
      <Route path="*" element={<WrongPage />} />
      <Route
        path="/"
        element={
          !isAuthenticated ? (
            <DefaultLayout dictatedColor="bg-[white]">
              <AuthorizedPage />
            </DefaultLayout>
          ) : (
            <DefaultLayout dictatedColor="border-[black]">
              <Home />
            </DefaultLayout>
          )
        }
      />
      <Route
        path={"/profile/:user"}
        element={
          <DefaultLayout dictatedColor="bg-[white] border-[#EBEAEA]">
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          </DefaultLayout>
        }
      />
      <Route
        path="/category/:topic"
        element={
          <DefaultLayout dictatedColor="bg-[white] ">
            <Category />
          </DefaultLayout>
        }
      />
      <Route
        path="/write"
        element={
          <DefaultLayout dictatedColor="bg-[white]">
            <WritingPage />
          </DefaultLayout>
        }
      />
      <Route
        path="/about"
        element={
          <DefaultLayout dictatedColor="bg-[#2A2A28] border-[black]" isWhite>
            <About />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default App;
