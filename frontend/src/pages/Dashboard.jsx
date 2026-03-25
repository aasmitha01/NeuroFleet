import { Car, Route, Activity, Clock } from "lucide-react";
import GlassCard from "../components/GlassCard";
import Badge from "../components/Badge";

export default function Dashboard() {
  const kpis = [
    { icon: Car, label: "Total Fleet", value: "248", change: "+12%", color: "text-blue-400" },
    { icon: Route, label: "Active Routes", value: "42", change: "+5%", color: "text-emerald-400" },
    { icon: Activity, label: "Trips Today", value: "1,234", change: "+18%", color: "text-[#ff2e63]" },
    { icon: Clock, label: "Avg Travel Time", value: "24m", change: "-8%", color: "text-amber-400" }
  ];

  const recentActivity = [
    { id: 1, vehicle: "NF-2841", action: "Trip Completed", location: "Downtown → Airport", time: "2 mins ago", status: "success" },
    { id: 2, vehicle: "NF-1523", action: "Maintenance Alert", location: "Service Center", time: "15 mins ago", status: "warning" },
    { id: 3, vehicle: "NF-7392", action: "Route Optimized", location: "City Center", time: "32 mins ago", status: "info" },
    { id: 4, vehicle: "NF-4856", action: "New Booking", location: "Station A → Mall", time: "1 hour ago", status: "success" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Real-time insights into your fleet operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <GlassCard key={index} hover>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">{kpi.label}</p>
                <h3 className="text-3xl font-bold text-white mb-2">{kpi.value}</h3>
                <span className={`text-sm ${kpi.change.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>
                  {kpi.change} from last week
                </span>
              </div>
              <div className={`p-3 bg-white/10 rounded-lg ${kpi.color}`}>
                <kpi.icon className="w-6 h-6" />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2">
          <h3 className="text-xl font-bold text-white mb-4">Fleet Activity Map</h3>
          <div className="relative h-96 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg flex items-center justify-center border border-white/10">
            <div className="z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff2e63]/20 border border-[#ff2e63]/50 rounded-lg mb-2">
                <div className="w-2 h-2 bg-[#ff2e63] rounded-full animate-pulse"></div>
                <span className="text-white text-sm">42 Active Vehicles</span>
              </div>
              <p className="text-gray-400 text-sm">Live tracking enabled</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-white font-medium text-sm">{activity.vehicle}</p>
                    <p className="text-gray-400 text-xs">{activity.action}</p>
                  </div>

                  <Badge variant={activity.status}>
                    {activity.status}
                  </Badge>

                </div>
                <p className="text-gray-500 text-xs mb-1">{activity.location}</p>
                <p className="text-gray-600 text-xs">{activity.time}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}