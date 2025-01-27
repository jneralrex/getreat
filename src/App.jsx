import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route>
    <Route path="/" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/landing" element={<LandingPage/>}/>

  </Route>


       
  )
);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;

