function NavSearch(){

    return <div className="join w-full py-2 flex place-content-center">
        <select className="select select-bordered select-sm join-item bg-base-200">
            <option className="selected ">KR</option>
            <option>NA</option>
            <option>EU</option>
        </select>
        <input className="input input-bordered input-sm join-item w-8/12" placeholder="Name..."/>
    </div>
}

export default NavSearch;