import { TrendingUp, Users, MapPin, FileDown, BarChart3 } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

export default function Analytics() {
  const kpis = [
    { icon: BarChart3, label: 'Total Fleet', value: '248', change: '+12%' },
    { icon: TrendingUp, label: 'Trips Today', value: '1,234', change: '+18%' },
    { icon: MapPin, label: 'Active Routes', value: '42', change: '+5%' },
    { icon: Users, label: 'Avg Travel Time', value: '24m', change: '-8%' }
  ];

  const hourlyActivity = [
    { hour: '00:00', trips: 12 },
    { hour: '03:00', trips: 8 },
    { hour: '06:00', trips: 45 },
    { hour: '09:00', trips: 89 },
    { hour: '12:00', trips: 124 },
    { hour: '15:00', trips: 98 },
    { hour: '18:00', trips: 145 },
    { hour: '21:00', trips: 67 }
  ];

  const maxTrips = Math.max(...hourlyActivity.map(h => h.trips));

  const cityZones = [
    { name: 'Downtown', activity: 'High', trips: 342, utilization: 92 },
    { name: 'Airport', activity: 'Medium', trips: 198, utilization: 78 },
    { name: 'Tech Park', activity: 'Medium', trips: 156, utilization: 71 },
    { name: 'Mall District', activity: 'High', trips: 289, utilization: 88 },
    { name: 'Residential', activity: 'Low', trips: 89, utilization: 45 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Analytics</h1>
          <p className="text-gray-400">Urban insights and fleet intelligence</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">
            <FileDown className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
          <Button variant="secondary">
            <FileDown className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <GlassCard key={index} hover>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">{kpi.label}</p>
                <h3 className="text-3xl font-bold text-white mb-2">{kpi.value}</h3>
                <span className={`text-sm ${kpi.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                  {kpi.change} vs last week
                </span>
              </div>
              <div className="p-3 bg-[#ff2e63]/20 rounded-lg">
                <kpi.icon className="w-6 h-6 text-[#ff2e63]" />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Hourly Activity</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-3 h-3 bg-[#ff2e63] rounded"></div>
              <span>Trip Volume</span>
            </div>
          </div>

          <div className="h-64 flex items-end justify-between gap-2">
            {hourlyActivity.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-white/5 rounded-t-lg relative group cursor-pointer hover:bg-white/10 transition-colors">
                  <div
                    className="w-full bg-gradient-to-t from-[#ff2e63] to-[#ff4d7a] rounded-t-lg transition-all duration-500"
                    style={{ height: `${(data.trips / maxTrips) * 200}px` }}
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-md px-2 py-1 rounded text-xs text-white whitespace-nowrap">
                    {data.trips} trips
                  </div>
                </div>
                <span className="text-xs text-gray-400">{data.hour}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="text-xl font-bold text-white mb-4">Urban Heatmap</h3>
          <div className="relative h-64 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

            <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-[#ff2e63]/40 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#ff2e63]/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-[#ff2e63]/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white font-bold text-2xl mb-1">High Density</p>
                <p className="text-gray-400 text-sm">Downtown & Mall District</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-2 bg-gradient-to-r from-blue-500 to-[#ff2e63] rounded"></div>
              <span className="text-gray-400">Activity Density</span>
            </div>
          </div>
        </GlassCard>
      </div>

      <GlassCard>
        <h3 className="text-xl font-bold text-white mb-4">City Zone Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-gray-400 text-sm font-medium pb-3">Zone</th>
                <th className="text-left text-gray-400 text-sm font-medium pb-3">Activity Level</th>
                <th className="text-left text-gray-400 text-sm font-medium pb-3">Total Trips</th>
                <th className="text-left text-gray-400 text-sm font-medium pb-3">Fleet Utilization</th>
                <th className="text-left text-gray-400 text-sm font-medium pb-3">Performance</th>
              </tr>
            </thead>
            <tbody>
              {cityZones.map((zone, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#ff2e63]" />
                      <span className="text-white font-medium">{zone.name}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      zone.activity === 'High' ? 'bg-red-500/20 text-red-300' :
                      zone.activity === 'Medium' ? 'bg-amber-500/20 text-amber-300' :
                      'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {zone.activity}
                    </span>
                  </td>
                  <td className="py-4 text-white font-medium">{zone.trips}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden max-w-[120px]">
                        <div
                          className="h-full bg-gradient-to-r from-[#ff2e63] to-[#ff4d7a]"
                          style={{ width: `${zone.utilization}%` }}
                        />
                      </div>
                      <span className="text-white text-sm font-medium">{zone.utilization}%</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-1">
                      <TrendingUp className={`w-4 h-4 ${
                        zone.utilization >= 80 ? 'text-emerald-400' :
                        zone.utilization >= 60 ? 'text-amber-400' : 'text-red-400'
                      }`} />
                      <span className={`text-sm font-medium ${
                        zone.utilization >= 80 ? 'text-emerald-400' :
                        zone.utilization >= 60 ? 'text-amber-400' : 'text-red-400'
                      }`}>
                        {zone.utilization >= 80 ? 'Excellent' :
                         zone.utilization >= 60 ? 'Good' : 'Needs Improvement'}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
