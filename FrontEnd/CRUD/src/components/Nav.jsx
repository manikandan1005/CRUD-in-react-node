function Nav() {

    return (
        <nav className="flex w-full justify-between fixed left-0 top-0 p-3">
            <h1 className="text-2xl font-bold">CRUD Application with React.js and Node.js </h1>
            <input className="border onfocus-off rounded p-3" type="search" />
            <button className="bg-blue-500 text-white rounded px-6 py-3 ">Add</button>
        </nav>
    );
}
export default Nav;