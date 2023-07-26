import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout";
import Home from "./pages/home";
import SecondPage from "./pages/pageSecond";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<div>Page Not Found</div>} />
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
      <Route
        path="/secondPage"
        element={
          <DefaultLayout>
            <SecondPage />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default App;
