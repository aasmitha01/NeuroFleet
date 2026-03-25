import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Fleet from './pages/Fleet';
import RoutesPage from './pages/Routes';
import Maintenance from './pages/Maintenance';
import Bookings from './pages/Bookings';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import DashboardLayout from './layouts/DashboardLayout';
import Drivers from "./pages/Drivers";
import DriverPerformance from "./pages/DriverPerformance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/fleet" element={<DashboardLayout><Fleet /></DashboardLayout>} />
        <Route path="/drivers" element={<DashboardLayout><Drivers /></DashboardLayout>} />
        <Route path="/routes" element={<DashboardLayout><RoutesPage /></DashboardLayout>} />
        <Route path="/maintenance" element={<DashboardLayout><Maintenance /></DashboardLayout>} />
        <Route path="/bookings" element={<DashboardLayout><Bookings /></DashboardLayout>} />
        <Route path="/analytics" element={<DashboardLayout><Analytics /></DashboardLayout>} />
        <Route path="/driver-performance" element={<DashboardLayout><DriverPerformance/></DashboardLayout>}/>
        <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
