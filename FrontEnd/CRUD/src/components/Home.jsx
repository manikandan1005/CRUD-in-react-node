import { useEffect, useState } from "react";

function Home(){
    const tableTittle=["ID","Name","Age","Course","Education","college","degree","city","action"];

    const [list,setList]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/api/user")
        .then((res)=>{
            return res.json()
        }
        )
        .then((data)=>{
            console.log(data);
            setList(data)
        })
    },[])
    return(
        <>
            <nav className="flex w-full items-center justify-between fixed left-0 top-0 p-3 bg-white shadow-xl">
                <h1 className="text-2xl font-bold">CRUD Application with React.js and Node.js </h1>
                <input className="border onfocus-off rounded p-3" type="search" />
                <button className="bg-blue-500 text-white rounded px-6 py-3 ">Add</button>
            </nav>
            <div>
                <div className="py-4 mt-20 mx-4">
                    <table className="w-full border-collapse border-black">
                        <thead className="border-black">
                            <tr>
                                {tableTittle.map((title,index)=>(
                                    <th key={index} className="border px-4 py-2 text-center uppercase">{title}</th>
                                ))}                               
                            </tr>
                        </thead>
                        <tbody className="border-black">
                            
                                {list.map((items)=>(
                                    <tr key={items.id} className="border ">
                                        <td className="border py-3 px-2">{items.id}</td>
                                        <td className="border py-3 px-2 text-xl">{items.name}</td>
                                        <td className="border py-3 px-2 text-xl">{items.age}</td>
                                        <td className="border py-3 px-2 text-xl">{items.course}</td>
                                        <td className="border py-3 px-2 text-xl">{items.education}</td>
                                        <td className="border py-3 px-2 text-xl">{items.college}</td>
                                        <td className="border py-3 px-2 text-xl">{items.degree}</td>
                                        <td className="border py-3 px-2 text-xl">{items.city}</td>
                                        <td className="items-center flex justify-center py-2">
                                            <button className="text-white rounded py-3 px-4 mx-1 bg-green-700">view</button>
                                            <button className="text-white rounded py-3 px-4 mx-1 bg-red-700">Remove</button>
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
export default Home;