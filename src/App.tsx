import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router";
import AuthLayout from "./components/layout/auth-layout/AuthLayout";
import MainLayout from "./components/layout/main-layout/MainLayout";
import DashboardLayout from "./components/layout/dashboard-layout/DashboardLayout";
import GuardRoute from "./components/guards/GuardRoute";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="" element={<Home />} />
        </Route>

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route
            index
            element={
              <GuardRoute>
                <Dashboard />
              </GuardRoute>
            }
          />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </div>
  );
};

export default App;
