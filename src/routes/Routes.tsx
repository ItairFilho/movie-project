import { BrowserRouter, Route, Routes as DomRoutes } from "react-router-dom";
import { Home } from "../pages/Login/Home";
import SignUp from "../pages/signUp/Signup";

export function Routes() {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element = {<SignUp />} />
      </DomRoutes>
    </BrowserRouter>
  );
}
