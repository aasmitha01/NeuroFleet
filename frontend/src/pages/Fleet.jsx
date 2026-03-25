import { useState } from "react";
import { MapPin, Battery, Activity, Trash } from "lucide-react";
import GlassCard from "../components/GlassCard";
import Badge from "../components/Badge";
import Button from "../components/Button";

export default function Fleet() {

  const [showForm, setShowForm] = useState(false);

  const [vehicles, setVehicles] = useState([
    {
      id: "NF-2841",
      model: "Tesla Model 3",
      status: "available",
      location: "Downtown Hub",
      battery: 85,
      trips: 12,
      lastMaintenance: "2 days ago",
    },
    {
      id: "NF-1523",
      model: "Toyota Prius",
      status: "in-use",
      location: "Airport Route",
      battery: 62,
      trips: 8,
      lastMaintenance: "1 week ago",
    },
  ]);

  const [formData, setFormData] = useState({
    id: "",
    model: "",
    location: "",
    battery: "",
    trips: "",
    status: "available",
  });

  const getStatusVariant = (status) => {
    switch (status) {
      case "available":
        return "success";
      case "in-use":
        return "info";
      case "maintenance":
        return "warning";
      default:
        return "info";
    }
  };

  const getBatteryColor = (battery) => {
    if (battery >= 70) return "bg-emerald-500";
    if (battery >= 40) return "bg-amber-500";
    return "bg-red-500";
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newVehicle = {
      ...formData,
      battery: Number(formData.battery),
      trips: Number(formData.trips),
      lastMaintenance: "Today"
    };

    setVehicles([...vehicles, newVehicle]);
    setShowForm(false);

    setFormData({
      id: "",
      model: "",
      location: "",
      battery: "",
      trips: "",
      status: "available",
    });
  };

  const deleteVehicle = (id) => {
    setVehicles(vehicles.filter(v => v.id !== id));
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Fleet Management
          </h1>
          <p className="text-gray-400">
            Monitor and manage your vehicle fleet
          </p>
        </div>

        <Button onClick={() => setShowForm(true)}>
          Add Vehicle
        </Button>
      </div>

      {/* Add Vehicle Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-slate-800 p-6 rounded-xl w-96 space-y-4">

            <h2 className="text-xl font-bold text-white">
              Add Vehicle
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                name="id"
                placeholder="Vehicle ID"
                value={formData.id}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700 text-white"
                required
              />

              <input
                name="model"
                placeholder="Model"
                value={formData.model}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700 text-white"
                required
              />

              <input
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700 text-white"
                required
              />

              <input
                type="number"
                name="battery"
                placeholder="Battery %"
                value={formData.battery}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700 text-white"
                required
              />

              <input
                type="number"
                name="trips"
                placeholder="Trips Today"
                value={formData.trips}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700 text-white"
                required
              />

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700 text-white"
              >
                <option value="available">Available</option>
                <option value="in-use">In Use</option>
                <option value="maintenance">Maintenance</option>
              </select>

              <div className="flex gap-2 pt-2">

                <Button type="submit">
                  Add
                </Button>

                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>

              </div>
            </form>

          </div>
        </div>
      )}

      {/* Fleet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {vehicles.map((vehicle) => (

          <GlassCard key={vehicle.id} hover>

            <div className="space-y-4">

              <div className="flex items-start justify-between">

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {vehicle.id}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {vehicle.model}
                  </p>
                </div>

                <Badge variant={getStatusVariant(vehicle.status)}>
                  {vehicle.status}
                </Badge>

              </div>

              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4"/>
                {vehicle.location}
              </div>

              {/* Battery Bar */}
              <div>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-1">
                  <span className="flex items-center gap-1">
                    <Battery className="w-4 h-4"/>
                    Battery
                  </span>
                  <span>{vehicle.battery}%</span>
                </div>

                <div className="w-full bg-slate-700 h-2 rounded">
                  <div
                    className={`${getBatteryColor(vehicle.battery)} h-2 rounded`}
                    style={{ width: `${vehicle.battery}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-between text-sm text-gray-400">
                <span>Trips Today: {vehicle.trips}</span>
                <span>Last Service: {vehicle.lastMaintenance}</span>
              </div>

              <div className="flex gap-2">

                <Button variant="secondary" className="w-full text-sm">
                  View Details
                </Button>

                <Button
                  variant="danger"
                  onClick={() => deleteVehicle(vehicle.id)}
                >
                  <Trash size={16}/>
                </Button>

              </div>

            </div>

          </GlassCard>

        ))}

      </div>

    </div>
  );
}