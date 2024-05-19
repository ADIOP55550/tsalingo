import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start pt-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/levelSelect">Level Select</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <img src="/logo.png" alt="TSLINGO LOGO" width="60" className="pt-5" />
      </div>
      <div className="navbar-end">

      </div>
    </div>
  )
}
