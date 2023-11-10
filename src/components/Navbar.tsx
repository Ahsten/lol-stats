function Navbar() {
    
    return <div class="navbar bg-primary">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a className="text-base-100">Leaderboards</a></li>
          <li><a>Stats</a></li>
          <li><a>Champions</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl text-base-100" href="/">LoL Analytics</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a className="text-base-100" href="/leaderboards">Leaderboards</a></li>
        <li><a className="text-base-100" href="/stats">Stats</a></li>
        <li><a className="text-base-100" href="/champions">Champions</a></li>
      </ul>
    </div>
    <div class="navbar-end">
        <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered input-sm w-24 md:w-auto" />
        </div>
    </div>
  </div>
}

export default Navbar;