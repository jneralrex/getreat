import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import ProviderReg from "./auth/ProviderReg";
import ContactUs from "./pages/ContactUs";
import Provider from "./pages/Provider";
import Privacy from "./pages/Privacy";
import Safety from "./pages/Safety";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/provider-reg" element={<ProviderReg />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/provider" element={<Provider />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/safety" element={<Safety />} />

    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
