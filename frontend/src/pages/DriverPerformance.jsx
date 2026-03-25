import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import GlassCard from "../components/GlassCard";
import Badge from "../components/Badge";

const drivers = [
{ name:"Marcus Chen", trips:142, ontime:96, rating:4.9, status:"Active" },
{ name:"Elena Vasquez", trips:135, ontime:97, rating:4.8, status:"Active" },
{ name:"Sarah Okonkwo", trips:128, ontime:94, rating:4.7, status:"Active" },
{ name:"Aisha Kamara", trips:112, ontime:93, rating:4.6, status:"Active" },
{ name:"Raj Patel", trips:87, ontime:91, rating:4.4, status:"On Leave" },
{ name:"Tomás Bergström", trips:54, ontime:88, rating:4.1, status:"Inactive" }
];

const tripData = drivers.slice(0,5);

const trendData = [
{ week:"W1", Marcus:35, Sarah:30, Elena:32 },
{ week:"W2", Marcus:38, Sarah:33, Elena:35 },
{ week:"W3", Marcus:36, Sarah:31, Elena:32 },
{ week:"W4", Marcus:34, Sarah:35, Elena:34 }
];

const ratingData = [
{ name:"5★", value:3 },
{ name:"4★", value:2 },
{ name:"3★", value:1 }
];

const COLORS = ["#ff4d6d","#5c7cfa","#748ffc"];

export default function DriverPerformance(){

const getStatusVariant=(status)=>{
switch(status){
case "Active": return "success";
case "On Leave": return "warning";
case "Inactive": return "secondary";
default: return "info";
}
}

return(

<div className="space-y-6">

<h1 className="text-2xl font-bold text-white">
Driver Performance
</h1>

{/* Stats */}

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<GlassCard>
<p className="text-gray-400">Total Drivers</p>
<h2 className="text-3xl text-white font-bold">6</h2>
</GlassCard>

<GlassCard>
<p className="text-gray-400">Active Drivers</p>
<h2 className="text-3xl text-white font-bold">4</h2>
</GlassCard>

<GlassCard>
<p className="text-gray-400">Top Performer</p>
<h2 className="text-xl text-pink-400 font-bold">Marcus Chen</h2>
</GlassCard>

<GlassCard>
<p className="text-gray-400">Average Rating</p>
<h2 className="text-3xl text-white font-bold">4.58</h2>
</GlassCard>

</div>

{/* Driver Table */}

<GlassCard>

<h2 className="text-lg text-white font-semibold mb-4">
Driver Performance Table
</h2>

<table className="w-full text-left">

<thead className="text-gray-400 text-sm border-b border-white/10">

<tr>
<th className="py-3">Driver</th>
<th>Trips</th>
<th>On-Time %</th>
<th>Rating</th>
<th>Status</th>
</tr>

</thead>

<tbody>

{drivers.map((d,index)=>(

<tr key={index} className="border-b border-white/5">

<td className="py-4 text-white font-medium">
{d.name}
</td>

<td className="text-gray-300">
{d.trips}
</td>

<td className="text-gray-300">
{d.ontime}%
</td>

<td className="text-gray-300">
{d.rating} ⭐
</td>

<td>
<Badge variant={getStatusVariant(d.status)}>
{d.status}
</Badge>
</td>

</tr>

))}

</tbody>

</table>

</GlassCard>


{/* Charts */}

<div className="grid md:grid-cols-2 gap-6">

{/* Bar Chart */}

<GlassCard>

<h3 className="text-white mb-4 font-semibold">
Top 5 Drivers by Trips
</h3>

<ResponsiveContainer width="100%" height={250}>

<BarChart data={tripData}>

<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>

<Bar dataKey="trips" fill="#ff4d6d"/>

</BarChart>

</ResponsiveContainer>

</GlassCard>


{/* Line Chart */}

<GlassCard>

<h3 className="text-white mb-4 font-semibold">
Performance Trend (Weekly)
</h3>

<ResponsiveContainer width="100%" height={250}>

<LineChart data={trendData}>

<XAxis dataKey="week"/>
<YAxis/>
<Tooltip/>

<Line type="monotone" dataKey="Marcus" stroke="#ff4d6d"/>
<Line type="monotone" dataKey="Sarah" stroke="#5c7cfa"/>
<Line type="monotone" dataKey="Elena" stroke="#748ffc"/>

</LineChart>

</ResponsiveContainer>

</GlassCard>

</div>


{/* Pie Chart */}

<GlassCard>

<h3 className="text-white mb-4 font-semibold">
Rating Distribution
</h3>

<ResponsiveContainer width="100%" height={250}>

<PieChart>

<Pie
data={ratingData}
dataKey="value"
outerRadius={90}
label
>

{ratingData.map((entry,index)=>(
<Cell key={index} fill={COLORS[index]}/>
))}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</GlassCard>

</div>

)
}