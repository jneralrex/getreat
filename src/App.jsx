import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route>
    <Route path="/" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/landing" element={<LandingPage/>}/>
    <Route path="/about" element={<AboutUs/>}/>
  </Route>


       
  )
);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;

