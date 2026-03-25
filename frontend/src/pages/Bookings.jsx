import { useState } from "react";
import { MapPin, Star } from "lucide-react";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";

export default function Bookings() {

const [showBooking,setShowBooking] = useState(false)

const vehicles = [
{
id:"NF-2841",
model:"Tesla Model 3",
rating:4.8,
trips:234,
eta:"5 mins",
price:"$45",
score:"98%"
},
{
id:"NF-9214",
model:"BMW i3",
rating:4.7,
trips:189,
eta:"7 mins",
price:"$42",
score:"95%"
},
{
id:"NF-7392",
model:"Nissan Leaf",
rating:4.6,
trips:167,
eta:"8 mins",
price:"$38",
score:"92%"
}
]

const handleBook=(vehicle)=>{
alert(`Vehicle ${vehicle.id} booked successfully`)
}

return(

<div className="space-y-6">

{/* Header */}

<div className="flex justify-between items-center">

<div>
<h1 className="text-3xl font-bold text-white">
Customer Bookings
</h1>

<p className="text-gray-400">
Manage reservations and AI recommendations
</p>
</div>

<Button onClick={()=>setShowBooking(true)}>
New Booking
</Button>

</div>


<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

{/* AI Recommended Vehicles */}

<div className="lg:col-span-2 space-y-4">

<GlassCard>

<h2 className="text-white text-lg font-semibold mb-4">
AI Recommended Vehicles
</h2>

<div className="space-y-4">

{vehicles.map((vehicle)=>(
<div
key={vehicle.id}
className="flex items-center justify-between bg-slate-800/50 p-4 rounded-xl"
>

<div className="flex gap-3 items-center">

<div className="bg-pink-500/20 p-3 rounded-lg">
<MapPin size={18}/>
</div>

<div>

<h3 className="text-white font-semibold">
{vehicle.id}
</h3>

<p className="text-gray-400 text-sm">
{vehicle.model}
</p>

<p className="text-xs text-gray-400 flex items-center gap-1">
<Star size={12}/>
{vehicle.rating} ({vehicle.trips} trips)
</p>

</div>

</div>


<div className="flex items-center gap-6 text-sm text-gray-300">

<div>
<p className="text-gray-400 text-xs">ETA</p>
<p>{vehicle.eta}</p>
</div>

<div>
<p className="text-gray-400 text-xs">Price</p>
<p>{vehicle.price}</p>
</div>

<div>
<p className="text-gray-400 text-xs">AI Score</p>
<p className="text-pink-400">{vehicle.score}</p>
</div>

<Button onClick={()=>handleBook(vehicle)}>
Book
</Button>

</div>

</div>
))}

</div>

</GlassCard>

</div>


{/* Quick Booking */}

<div>

<GlassCard>

<h2 className="text-white font-semibold mb-4">
Quick Booking
</h2>

<div className="space-y-4">

<input
placeholder="Enter pickup address"
className="w-full p-2 bg-slate-700 rounded text-white"
/>

<input
placeholder="Enter destination"
className="w-full p-2 bg-slate-700 rounded text-white"
/>

<div className="grid grid-cols-2 gap-2">

<button className="bg-slate-800 border border-white/5 rounded-lg p-2 text-white">
09:00
</button>

<button className="bg-slate-800 border border-white/5 rounded-lg p-2 text-white">
10:00
</button>

<button className="bg-slate-800 border border-white/5 rounded-lg p-2 text-white">
11:00
</button>

<button className="bg-slate-800 border border-white/5 rounded-lg p-2 text-white">
12:00
</button>

<button className="bg-slate-800 border border-white/5 rounded-lg p-2 text-white">
13:00
</button>

<button className="bg-slate-800 border border-white/5 rounded-lg p-2 text-white">
14:00
</button>

</div>

<Button className="w-full">
Find Vehicle
</Button>

</div>

</GlassCard>

</div>

</div>


{/* Booking Modal */}

{showBooking && (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center">

<div className="bg-slate-800 p-6 rounded-xl w-96 space-y-4">

<h2 className="text-white font-bold text-lg">
New Booking
</h2>

<input
placeholder="Customer Name"
className="w-full p-2 bg-slate-700 rounded text-white"
/>

<input
placeholder="Pickup Location"
className="w-full p-2 bg-slate-700 rounded text-white"
/>

<input
placeholder="Drop Location"
className="w-full p-2 bg-slate-700 rounded text-white"
/>

<input
type="datetime-local"
className="w-full p-2 bg-slate-700 rounded text-white"
/>

<div className="flex gap-2">

<Button>
Create Booking
</Button>

<Button
variant="secondary"
onClick={()=>setShowBooking(false)}
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