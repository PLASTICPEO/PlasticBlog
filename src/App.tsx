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
  const { isAuthenticated, scrollY } = useContext(AppContext);
  const changeHeaderColor =
    scrollY < 470 ? "bg-[#A4C794] border-[black]" : "bg-[#F6F6F4]";

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
            <DefaultLayout dictatedColor={changeHeaderColor}>
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
          <DefaultLayout dictatedColor="bg-[#2A2A28] border-[#1F1F1E]" isWhite>
            <About />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default App;
