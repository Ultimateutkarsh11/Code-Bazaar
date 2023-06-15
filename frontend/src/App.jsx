import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/products"
          element={
            <>
              <NavBar />
              <ProductsList />
            </>
          }
        />
        <Route
          path="/products/:id"
          element={
            <>
              <NavBar />
              <Product />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <NavBar />
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <>
              <NavBar />
              <NotFound />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
