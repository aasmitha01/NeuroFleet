import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import GlassCard from "../components/GlassCard";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "customer",
  });

  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "fleet-manager", label: "Fleet Manager" },
    { value: "driver", label: "Driver" },
    { value: "customer", label: "Customer" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/1200x/89/8c/53/898c53df0d86ce92ef4131e3ed190f51.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/95 via-[#1a2845]/90 to-[#0a1628]/95 backdrop-blur-sm" />

      <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
        <MapPin className="w-8 h-8 text-[#ff2e63]" />
        <span className="text-2xl font-bold text-white">NeuroFleetX</span>
      </div>

      <GlassCard className="w-full max-w-md z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-400">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />

          <Select
            label="Role"
            options={roleOptions}
            value={formData.role}
            onChange={(e) =>
              setFormData({ ...formData, role: e.target.value })
            }
          />

          <Button type="submit" className="w-full">
            Sign In
          </Button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-sm text-gray-400 hover:text-[#ff2e63]"
            >
              Don't have an account?{" "}
              <span className="font-semibold">Register</span>
            </button>
          </div>
        </form>
      </GlassCard>
    </div>
  );
}