function Navbar() {
    
    return <div className="navbar bg-primary">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a className="text-base-100">Leaderboards</a></li>
          <li><a>Stats</a></li>
          <li><a>Champions</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl text-base-100" href="/">LoL Analytics</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a className="text-base-100" href="/">Home</a></li>
        <li><a className="text-base-100" href="/leaderboards">Leaderboards</a></li>
        <li><a className="text-base-100" href="/stats">Stats</a></li>
        <li><a className="text-base-100" href="/champions">Champions</a></li>
      </ul>
    </div>
    <div className="navbar-end">
    </div>
  </div>
}

export default Navbar;