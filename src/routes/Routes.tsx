import { BrowserRouter, Route, Routes as DomRoutes } from "react-router-dom";
import { Home } from "../pages/Home";

export function Routes() {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route path="/" element={<Home />} />
      </DomRoutes>
    </BrowserRouter>
  );
}
