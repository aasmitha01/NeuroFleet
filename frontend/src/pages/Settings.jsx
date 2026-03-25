import { User, Bell, Shield, Palette, Globe } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <GlassCard>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#ff2e63]/20 rounded-lg">
                <User className="w-5 h-5 text-[#ff2e63]" />
              </div>
              <h3 className="text-xl font-bold text-white">Profile Information</h3>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First Name" defaultValue="Admin" />
                <Input label="Last Name" defaultValue="User" />
              </div>
              <Input label="Email" type="email" defaultValue="admin@neurofleetx.com" />
              <Input label="Phone" type="tel" defaultValue="+1 (555) 123-4567" />

              <div className="flex justify-end pt-4">
                <Button>Save Changes</Button>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#ff2e63]/20 rounded-lg">
                <Bell className="w-5 h-5 text-[#ff2e63]" />
              </div>
              <h3 className="text-xl font-bold text-white">Notifications</h3>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Fleet Alerts', description: 'Get notified about vehicle status changes' },
                { label: 'Maintenance Reminders', description: 'Receive predictive maintenance alerts' },
                { label: 'Booking Updates', description: 'Stay informed about new bookings' },
                { label: 'Analytics Reports', description: 'Weekly performance summaries' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div>
                    <p className="text-white font-medium">{item.label}</p>
                    <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff2e63]"></div>
                  </label>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#ff2e63]/20 rounded-lg">
                <Shield className="w-5 h-5 text-[#ff2e63]" />
              </div>
              <h3 className="text-xl font-bold text-white">Security</h3>
            </div>

            <div className="space-y-4">
              <Input label="Current Password" type="password" placeholder="Enter current password" />
              <Input label="New Password" type="password" placeholder="Enter new password" />
              <Input label="Confirm Password" type="password" placeholder="Confirm new password" />

              <div className="flex justify-end pt-4">
                <Button>Update Password</Button>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="space-y-6">
          <GlassCard>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#ff2e63]/20 rounded-lg">
                <Palette className="w-5 h-5 text-[#ff2e63]" />
              </div>
              <h3 className="text-xl font-bold text-white">Appearance</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Theme</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <input type="radio" name="theme" defaultChecked className="text-[#ff2e63]" />
                    <span className="text-white">Dark (Current)</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <input type="radio" name="theme" className="text-[#ff2e63]" />
                    <span className="text-white">Light</span>
                  </label>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#ff2e63]/20 rounded-lg">
                <Globe className="w-5 h-5 text-[#ff2e63]" />
              </div>
              <h3 className="text-xl font-bold text-white">Preferences</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
                <select className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#ff2e63] focus:ring-2 focus:ring-[#ff2e63]/50 transition-all">
                  <option className="bg-[#0a1628]">English</option>
                  <option className="bg-[#0a1628]">Spanish</option>
                  <option className="bg-[#0a1628]">French</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Timezone</label>
                <select className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#ff2e63] focus:ring-2 focus:ring-[#ff2e63]/50 transition-all">
                  <option className="bg-[#0a1628]">UTC-5 (EST)</option>
                  <option className="bg-[#0a1628]">UTC-8 (PST)</option>
                  <option className="bg-[#0a1628]">UTC+0 (GMT)</option>
                </select>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
