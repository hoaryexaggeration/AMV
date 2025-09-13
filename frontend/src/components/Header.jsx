import React from 'react'
import { Link } from 'react-router-dom'


export default function Header(){
return (
<header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
<div className="container mx-auto flex items-center justify-between p-4">
<Link to="/" className="flex items-center gap-3">
<img src="/logo.png" alt="AMV" className="w-10 h-10 rounded" />
<div className="font-semibold">All Matters Visa</div>
</Link>
<nav className="space-x-4 hidden md:block">
<Link to="/services" className="hover:underline">Services</Link>
<Link to="/partnership" className="hover:underline">Partnership</Link>
<Link to="/track" className="hover:underline">Track Application</Link>
<Link to="/contact" className="hover:underline">Contact</Link>
</nav>
<div>
<Link to="/dashboard" className="bg-white text-blue-600 px-3 py-1 rounded">Sign in</Link>
</div>
</div>
</header>
)
}