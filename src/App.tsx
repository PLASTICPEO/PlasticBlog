import { Route, Routes } from "react-router-dom";

import DefaultLayout from "./layout";
import Home from "./pages/home";
import UserProfile from "./pages/userProfile";
import { useContext } from "react";
import { AppContext } from "./context/ContextProvider";
import ProtectedRoute from "./ProtectedRouter";

const App = () => {
  const { isAuthenticated } = useContext(AppContext);

  return (
    <Routes>
      <Route path="*" element={<div>Page Not Found</div>} />
      <Route
        path="/"
        element={
          <DefaultLayout withTopContent={!isAuthenticated ? false : true}>
            <Home />
          </DefaultLayout>
        }
      />
      <Route
        path={"/user-profile"}
        element={
          <DefaultLayout isWhite withTopContent={false}>
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default App;
