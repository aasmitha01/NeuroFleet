import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Car,
  Route,
  Wrench,
  Calendar,
  BarChart3,
  Settings,
  Bell,
  User,
  LogOut,
  MapPin,
  Menu,
  X,
  Users,
  Activity,
} from "lucide-react";

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Car, label: "Fleet", path: "/fleet" },
    { icon: Route, label: "Routes", path: "/routes" },
    { icon: Users, label: "Drivers", path: "/drivers" },
    { icon: Wrench, label: "Maintenance", path: "/maintenance" },
    { icon: Calendar, label: "Bookings", path: "/bookings" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
    { icon: Activity, label: "Driver Performance", path: "/driver-performance" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2845] to-[#0a1628]">

      {/* SIDEBAR */}

      <aside
        className={`fixed left-0 top-0 h-full bg-white/5 backdrop-blur-xl border-r border-white/10 transition-all duration-300 z-50 ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex flex-col h-full justify-between">

          {/* TOP SECTION */}

          <div>

            {/* LOGO */}

            <div className="flex items-center gap-3 p-6 border-b border-white/10">
              <MapPin className="w-8 h-8 text-[#ff2e63]" />
              {isSidebarOpen && (
                <span className="text-xl font-bold text-white">
                  NeuroFleetX
                </span>
              )}
            </div>

            {/* MENU */}

            <nav className="p-4 space-y-2 overflow-y-auto">

              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-[#ff2e63] to-[#ff4d7a] text-white shadow-lg shadow-[#ff2e63]/50"
                      : "text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon className="w-5 h-5" />

                  {isSidebarOpen && (
                    <span className="font-medium">
                      {item.label}
                    </span>
                  )}

                </button>
              ))}

            </nav>

          </div>

          {/* BOTTOM USER SECTION */}

          <div className="p-4 border-t border-white/10">

            <div className="flex items-center gap-3 mb-3">

              <div className="w-9 h-9 bg-[#ff2e63] rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>

              {isSidebarOpen && (
                <div>
                  <p className="text-white text-sm font-medium">
                    Aasmitha
                  </p>
                  <p className="text-gray-400 text-xs">
                    admin
                  </p>
                </div>
              )}

            </div>

            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg w-full"
            >
              <LogOut className="w-4 h-4" />

              {isSidebarOpen && "Sign out"}

            </button>

          </div>

        </div>
      </aside>

      {/* MAIN CONTENT */}

      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
      >

        {/* TOPBAR */}

        <header className="sticky top-0 z-40 bg-white/5 backdrop-blur-xl border-b border-white/10">

          <div className="flex items-center justify-between px-6 py-4">

            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-white hover:bg-white/10 p-2 rounded-lg"
            >
              {isSidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            <div className="flex items-center gap-4">

              {/* NOTIFICATION */}

              <button className="relative text-white hover:bg-white/10 p-2 rounded-lg">

                <Bell className="w-5 h-5" />

                <span className="absolute top-1 right-1 w-2 h-2 bg-[#ff2e63] rounded-full"></span>

              </button>

              {/* PROFILE */}

              <div className="flex items-center gap-3 px-4 py-2 bg-white/10 border border-white/20 rounded-lg">

                <User className="w-5 h-5 text-white" />

                <span className="text-white text-sm font-medium">
                  Profile
                </span>

              </div>

            </div>

          </div>

        </header>

        {/* PAGE CONTENT */}

        <main className="p-6">

          {children}

        </main>

      </div>

    </div>
  );
}