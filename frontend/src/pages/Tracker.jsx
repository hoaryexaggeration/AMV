import React, {useState} from 'react'
import axios from 'axios'


export default function Tracker(){
const [ref, setRef] = useState('')
const [result, setResult] = useState(null)


async function lookup(e){
e.preventDefault()
try{
const res = await axios.get(`/api/visas/track?ref=${encodeURIComponent(ref)}`)
setResult(res.data)
}catch(err){
setResult({error:'Not found'})
}
}


return (
<div>
<h2>Track Your Application</h2>
<form onSubmit={lookup} className="mt-3 flex gap-2">
<input value={ref} onChange={e=>setRef(e.target.value)} placeholder="Enter tracking ref" className="border p-2 rounded flex-1" />
<button className="bg-blue-600 text-white px-3 py-2 rounded">Track</button>
</form>


{result && <pre className="mt-4 bg-slate-50 p-3 rounded text-sm">{JSON.stringify(result, null, 2)}</pre>}
</div>
)
}