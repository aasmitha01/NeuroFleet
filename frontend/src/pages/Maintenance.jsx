import { useState } from "react";
import { CheckCircle, Clock, AlertTriangle, Wrench } from "lucide-react";
import GlassCard from "../components/GlassCard";
import Badge from "../components/Badge";
import Button from "../components/Button";

export default function Maintenance() {

const [showForm,setShowForm] = useState(false)

const alerts = [
{
vehicle:"NF-1523",
issue:"Brake Pad Wear",
message:"Service needed in 5 days",
status:"warning",
confidence:"94%"
},
{
vehicle:"NF-4856",
issue:"Battery Health Low",
message:"Immediate attention required",
status:"error",
confidence:"98%"
}
]

const getStatusVariant=(status)=>{
switch(status){
case "warning": return "warning"
case "error": return "danger"
default: return "info"
}
}

return(

<div className="space-y-6">

{/* Header */}

<div className="flex items-center justify-between">

<div>
<h1 className="text-3xl font-bold text-white">
Predictive Maintenance
</h1>

<p className="text-gray-400">
AI-powered vehicle health monitoring
</p>
</div>

<Button onClick={()=>setShowForm(true)}>
Schedule Service
</Button>

</div>


{/* Top Stats */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<GlassCard>

<div className="flex justify-between items-center">

<div>
<p className="text-gray-400">Healthy</p>
<h2 className="text-3xl font-bold text-white">198</h2>
</div>

<div className="bg-emerald-500/20 p-3 rounded-lg">
<CheckCircle className="text-emerald-400"/>
</div>

</div>

<div className="w-full bg-slate-700 h-2 rounded mt-4">
<div className="bg-emerald-500 h-2 rounded w-[80%]" />
</div>

<p className="text-xs text-gray-400 mt-1">80% of fleet</p>

</GlassCard>


<GlassCard>

<div className="flex justify-between items-center">

<div>
<p className="text-gray-400">Due Soon</p>
<h2 className="text-3xl font-bold text-white">38</h2>
</div>

<div className="bg-amber-500/20 p-3 rounded-lg">
<Clock className="text-amber-400"/>
</div>

</div>

<div className="w-full bg-slate-700 h-2 rounded mt-4">
<div className="bg-amber-500 h-2 rounded w-[15%]" />
</div>

<p className="text-xs text-gray-400 mt-1">15% of fleet</p>

</GlassCard>


<GlassCard>

<div className="flex justify-between items-center">

<div>
<p className="text-gray-400">Critical</p>
<h2 className="text-3xl font-bold text-white">12</h2>
</div>

<div className="bg-red-500/20 p-3 rounded-lg">
<AlertTriangle className="text-red-400"/>
</div>

</div>

<div className="w-full bg-slate-700 h-2 rounded mt-4">
<div className="bg-red-500 h-2 rounded w-[5%]" />
</div>

<p className="text-xs text-gray-400 mt-1">5% of fleet</p>

</GlassCard>

</div>


{/* Maintenance Alerts */}

<GlassCard>

<h2 className="text-xl font-bold text-white mb-4">
Maintenance Alerts
</h2>

<div className="space-y-4">

{alerts.map((alert,index)=>(

<div
key={index}
className="bg-slate-800/50 p-4 rounded-xl border border-white/5"
>

<div className="flex justify-between items-start">

<div className="flex gap-3">

<div className="bg-amber-500/20 p-2 rounded">
<Wrench size={18}/>
</div>

<div>

<h3 className="text-white font-semibold">
{alert.vehicle}
</h3>

<p className="text-gray-400 text-sm">
{alert.issue}
</p>

</div>

</div>

<Badge variant={getStatusVariant(alert.status)}>
{alert.status}
</Badge>

</div>


<p className="text-gray-300 text-sm mt-2">
{alert.message}
</p>


<div className="w-full bg-slate-700 h-2 rounded mt-3">
<div className="bg-pink-500 h-2 rounded w-[90%]" />
</div>


<div className="flex justify-between items-center mt-2">

<p className="text-xs text-gray-400">
{alert.confidence} confidence
</p>

<Button variant="secondary">
Schedule
</Button>

</div>

</div>

))}

</div>

</GlassCard>


{/* Schedule Service Modal */}

{showForm && (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center">

<div className="bg-slate-800 p-6 rounded-xl w-96 space-y-4">

<h2 className="text-white text-lg font-bold">
Schedule Service
</h2>

<input
placeholder="Vehicle ID"
className="w-full p-2 bg-slate-700 rounded text-white"
/>

<input
placeholder="Service Type"
className="w-full p-2 bg-slate-700 rounded text-white"
/>

<input
type="date"
className="w-full p-2 bg-slate-700 rounded text-white"
/>

<div className="flex gap-2">

<Button>
Add Service
</Button>

<Button
variant="secondary"
onClick={()=>setShowForm(false)}
>
Cancel
</Button>

</div>

</div>

</div>

)}

</div>

)

}