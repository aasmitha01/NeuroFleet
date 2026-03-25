import { useState } from "react";
import { MapPin, Route, Clock, Trash } from "lucide-react";
import GlassCard from "../components/GlassCard";
import Badge from "../components/Badge";
import Button from "../components/Button";

export default function Routes() {

const [showForm,setShowForm] = useState(false)

const [routes,setRoutes] = useState([
{
id:"RT-101",
pickup:"Downtown Hub",
drop:"Airport",
distance:"12 km",
time:"20 mins",
status:"active"
},
{
id:"RT-102",
pickup:"City Center",
drop:"North Station",
distance:"8 km",
time:"15 mins",
status:"scheduled"
}
])

const [formData,setFormData] = useState({
id:"",
pickup:"",
drop:"",
distance:"",
time:"",
status:"active"
})

const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
e.preventDefault()

setRoutes([...routes,formData])

setShowForm(false)

setFormData({
id:"",
pickup:"",
drop:"",
distance:"",
time:"",
status:"active"
})
}

const deleteRoute=(id)=>{
setRoutes(routes.filter(r=>r.id!==id))
}

return(

<div className="space-y-6">

<div className="flex items-center justify-between">

<div>
<h1 className="text-3xl font-bold text-white">Routes</h1>
<p className="text-gray-400">Manage route planning</p>
</div>

<Button onClick={()=>setShowForm(true)}>
Plan New Route
</Button>

</div>

{/* Route Form */}

{showForm && (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

<div className="bg-slate-800 p-6 rounded-xl w-96 space-y-4">

<h2 className="text-xl text-white font-bold">
Create Route
</h2>

<form onSubmit={handleSubmit} className="space-y-3">

<input
name="id"
placeholder="Route ID"
value={formData.id}
onChange={handleChange}
className="w-full p-2 bg-slate-700 text-white rounded"
/>

<input
name="pickup"
placeholder="Pickup Location"
value={formData.pickup}
onChange={handleChange}
className="w-full p-2 bg-slate-700 text-white rounded"
/>

<input
name="drop"
placeholder="Drop Location"
value={formData.drop}
onChange={handleChange}
className="w-full p-2 bg-slate-700 text-white rounded"
/>

<input
name="distance"
placeholder="Distance"
value={formData.distance}
onChange={handleChange}
className="w-full p-2 bg-slate-700 text-white rounded"
/>

<input
name="time"
placeholder="Estimated Time"
value={formData.time}
onChange={handleChange}
className="w-full p-2 bg-slate-700 text-white rounded"
/>

<select
name="status"
value={formData.status}
onChange={handleChange}
className="w-full p-2 bg-slate-700 text-white rounded"
>
<option value="active">Active</option>
<option value="scheduled">Scheduled</option>
<option value="completed">Completed</option>
</select>

<div className="flex gap-2 pt-2">

<Button type="submit">
Create
</Button>

<Button
variant="secondary"
type="button"
onClick={()=>setShowForm(false)}
>
Cancel
</Button>

</div>

</form>

</div>

</div>

)}

{/* Route Cards */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

{routes.map((route)=>(

<GlassCard key={route.id} hover>

<div className="space-y-4">

<div className="flex justify-between">

<h3 className="text-xl font-bold text-white">
{route.id}
</h3>

<Badge>
{route.status}
</Badge>

</div>

<div className="flex items-center gap-2 text-gray-400">

<MapPin size={16}/>
{route.pickup}

</div>

<div className="flex items-center gap-2 text-gray-400">

<Route size={16}/>
{route.drop}

</div>

<div className="flex justify-between text-sm text-gray-400">

<span className="flex items-center gap-1">
<Clock size={14}/>
{route.time}
</span>

<span>{route.distance}</span>

</div>

<div className="flex gap-2">

<Button className="w-full text-sm">
View Route
</Button>

<Button
variant="danger"
onClick={()=>deleteRoute(route.id)}
>
<Trash size={16}/>
</Button>

</div>

</div>

</GlassCard>

))}

</div>

</div>

)

}