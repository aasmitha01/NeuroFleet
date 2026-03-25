import { useState } from "react";
import { Search, Plus, Pencil, Trash2, X } from "lucide-react";
import GlassCard from "../components/GlassCard";
import Badge from "../components/Badge";
import Button from "../components/Button";

export default function Drivers() {

const [search,setSearch] = useState("");
const [showModal,setShowModal] = useState(false);

const [drivers,setDrivers] = useState([
{
name:"Marcus Chen",
license:"DL-893714",
phone:"+1 (555) 312-8476",
status:"Active"
},
{
name:"Sarah Okonkwo",
license:"DL-451298",
phone:"+1 (555) 784-2039",
status:"Active"
},
{
name:"Raj Patel",
license:"DL-672038",
phone:"+1 (555) 926-5143",
status:"On Leave"
},
{
name:"Elena Vasquez",
license:"DL-318956",
phone:"+1 (555) 607-3891",
status:"Active"
},
{
name:"Tomás Bergström",
license:"DL-547821",
phone:"+1 (555) 148-7562",
status:"Inactive"
}
]);

const [formData,setFormData] = useState({
name:"",
license:"",
phone:"",
status:"Active"
});

const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value});
};

const addDriver=(e)=>{
e.preventDefault();

setDrivers([...drivers,formData]);

setFormData({
name:"",
license:"",
phone:"",
status:"Active"
});

setShowModal(false);
};

const deleteDriver=(index)=>{
const updated=[...drivers];
updated.splice(index,1);
setDrivers(updated);
};

const getStatusVariant=(status)=>{
switch(status){
case "Active": return "success";
case "On Leave": return "warning";
case "Inactive": return "secondary";
default: return "info";
}
};

const filteredDrivers = drivers.filter((driver)=>
driver.name.toLowerCase().includes(search.toLowerCase())
);

return(

<div className="space-y-6">

{/* Header */}

<h1 className="text-2xl font-bold text-white">
Drivers
</h1>

{/* Search + Add Driver */}

<div className="flex items-center justify-between">

<div className="relative w-72">

<Search className="absolute left-3 top-3 text-gray-400" size={16}/>

<input
type="text"
placeholder="Search drivers..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-white/5 rounded-lg text-white"
/>

</div>

<Button
className="flex items-center gap-2"
onClick={()=>setShowModal(true)}
>
<Plus size={16}/>
Add Driver
</Button>

</div>

{/* Drivers Table */}

<GlassCard>

<div className="overflow-x-auto">

<table className="w-full text-left">

<thead>

<tr className="text-gray-400 text-sm border-b border-white/5">
<th className="py-3">Name</th>
<th>License No.</th>
<th>Phone</th>
<th>Status</th>
<th className="text-right">Actions</th>
</tr>

</thead>

<tbody>

{filteredDrivers.map((driver,index)=>(

<tr
key={index}
className="border-b border-white/5 hover:bg-slate-800/40 transition"
>

<td className="py-4 text-white font-medium">
{driver.name}
</td>

<td className="text-gray-300">
{driver.license}
</td>

<td className="text-gray-300">
{driver.phone}
</td>

<td>
<Badge variant={getStatusVariant(driver.status)}>
{driver.status}
</Badge>
</td>

<td className="flex justify-end gap-3 py-4">

<button className="text-gray-400 hover:text-white">
<Pencil size={16}/>
</button>

<button
className="text-gray-400 hover:text-red-400"
onClick={()=>deleteDriver(index)}
>
<Trash2 size={16}/>
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

</GlassCard>

{/* Add Driver Modal */}

{showModal && (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

<div className="bg-slate-900 p-6 rounded-xl w-96 space-y-4 border border-white/10">

<div className="flex justify-between items-center">

<h2 className="text-white text-lg font-semibold">
Add Driver
</h2>

<X
className="cursor-pointer text-gray-400"
onClick={()=>setShowModal(false)}
/>

</div>

<form onSubmit={addDriver} className="space-y-3">

<input
name="name"
placeholder="Driver Name"
value={formData.name}
onChange={handleChange}
className="w-full p-2 bg-slate-800 border border-white/5 rounded text-white"
required
/>

<input
name="license"
placeholder="License Number"
value={formData.license}
onChange={handleChange}
className="w-full p-2 bg-slate-800 border border-white/5 rounded text-white"
required
/>

<input
name="phone"
placeholder="Phone Number"
value={formData.phone}
onChange={handleChange}
className="w-full p-2 bg-slate-800 border border-white/5 rounded text-white"
required
/>

<select
name="status"
value={formData.status}
onChange={handleChange}
className="w-full p-2 bg-slate-800 border border-white/5 rounded text-white"
>

<option>Active</option>
<option>On Leave</option>
<option>Inactive</option>

</select>

<Button className="w-full">
Add Driver
</Button>

</form>

</div>

</div>

)}

</div>

);
}