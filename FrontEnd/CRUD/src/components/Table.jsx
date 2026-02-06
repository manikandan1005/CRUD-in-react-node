import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function Table(){
    const tableTittle=["ID","Name","Age","Course","Education","college","degree","city","action"];

    const [list,setList]=useState([]);
    const[filterList,setFilterList]=useState([]);

    //get the user rom backend
    useEffect(()=>{
        fetch("http://localhost:3000/api/user")
        .then((res)=>{
            return res.json()
        }
        )
        .then((data)=>{
            console.log(data);
            setList(data);
            setFilterList(data);
        })
    },[])

    // delete 
    function Remove(id){
        // const updateList=list.filter((user)=>user.id!==id)
        // setList(updateList)
        fetch(`http://localhost:3000/api/user/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }})
        .then((res)=>res.json())
        .then((data)=>{
            setList(data)
        })
        .catch(err=>console.error(err));
    }

        function searchText(event){

            const text=event.target.value.toLowerCase();
            console.log(text);
            const filterdt=list.filter((user)=>user.name.toLowerCase().includes(text)  || user.city.toLowerCase().includes(text))
            console.log(filterdt);
            setFilterList(filterdt);
        }

    return(
        <>
            <nav className="flex w-full items-center justify-between fixed left-0 top-0 p-3 bg-white shadow-xl">
                <h1 className="text-2xl font-bold">CRUD Application with React.js and Node.js </h1>
                <div className="flex gap-5">
                    <input className="border focus:outline-none rounded p-3 w-xl" onChange={searchText} type="search" />
                <Link to={"/new"} className="bg-blue-500 text-white rounded px-6 py-3 ">Add</Link>
                </div>
            </nav>
            <div>
                <div className="py-4 mt-20 mx-4">
                    <table className="w-full border-collapse border-black">
                        <thead className=" ">
                            <tr className=" bg-black text-white">
                                {tableTittle.map((title,index)=>(
                                    <th key={index} className="border border-black px-4 py-3 text-center uppercase">{title}</th>
                                ))}                               
                            </tr>
                        </thead>
                        <tbody className="border-black">
                            
                                {filterList.map((items)=>(
                                    <tr key={items.id} className="border bg-gray-100 hover:bg-white">
                                        <td className="border py-3 px-2">{items.id}</td>
                                        <td className="border py-3 px-2 text-xl">{items.name}</td>
                                        <td className="border py-3 px-2 text-xl">{items.age}</td>
                                        <td className="border py-3 px-2 text-xl">{items.course}</td>
                                        <td className="border py-3 px-2 text-xl">{items.education}</td>
                                        <td className="border py-3 px-2 text-xl">{items.college}</td>
                                        <td className="border py-3 px-2 text-xl">{items.degree}</td>
                                        <td className="border py-3 px-2 text-xl">{items.city}</td>
                                        <td className="items-center flex flex-wrap justify-center py-2">
                                            <button className="text-white rounded py-3 px-4 mx-1 bg-green-700">view</button>
                                            <button className="text-white rounded py-3 px-4 mx-1 bg-red-700" onClick={()=>{Remove(items.id)}}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </>
    );
}
export default Table;