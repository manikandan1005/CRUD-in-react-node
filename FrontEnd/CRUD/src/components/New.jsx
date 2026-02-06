import { useState } from "react";
import { useNavigate } from "react-router-dom";
function New() {
    const head="Add new record";
    const Navigator=useNavigate();
    
    const [formData,setFormData]=useState({
        course: "",
        name: "",
        city: "",
        tk: "",
        post: "",
        pinCode: "",
        age: "",
        education: "",
        college: "",
        degree: "",
        passedOut: ""
    })
    function getName(event){
        formData.name=event.target.value;
         console.log(event.target.value);
         
    }
    const getAge=event=>formData.age=event.target.value;
    const getEducation=event=>formData.education=event.target.value;
    const getDegree=event=>formData.degree=event.target.value;
    const getPassedOut=event=>formData.passedOut=event.target.value;
    const getCollege=event=>formData.college=event.target.value;
    const getCourse=event=>formData.course=event.target.value;
    const getTk=event=>formData.tk=event.target.value;
    const getCity=event=>formData.city=event.target.value;
    const getPost=event=>formData.post=event.target.value;
    const getPinCode=event=>formData.pinCode=event.target.value;
    
    function newRecord(){
        console.log("added")
        setFormData({...formData})
        console.log(formData);
        fetch("http://localhost:3000/api/user",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        }
        )
        .then(res=>console.log(res))
        .catch(err=>console.error(err))

        Navigator("/")
        
    };
    const goTable=()=>Navigator('/');
    return (
        <>
            <div className="w-full flex flex-col gap-5 items-center justify-center mt-20">
                
                <form   className="w-xl mb-10 shadow p-6 rounded flex gap-5 flex-col">
                    <span className="flex relative text-2xl uppercase font-bold">
                    <h1 className="">Add new record</h1>
                    <span className=" absolute right-5 cursor-pointer hover:text-red-700" onClick={goTable}>&times;</span>
                </span>

                    <label htmlFor="name" >Name:</label>
                    <input onChange={getName} type="text" maxLength={10} id="name" className="border rounded p-1 focus:outline-none " />


                    <label htmlFor="age" >Age:</label>
                    <input onChange={getAge} type="number" id="age" className="border rounded p-1 focus:outline-none " />

                    <label htmlFor="course">course</label>
                    <select onChange={getCourse} className="border rounded p-2 focus:outline-none " >
                        <option value="">Select Course</option>
                        <option value="MEAN">MEAN</option>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                        <option value="Flutter">Flutter</option>
                        </select>


                    <label htmlFor="education" >Education:</label>
                    <input type="text" onChange={getEducation}  id="education" list="educationList" className="border rounded p-1 focus:outline-none " />
                    <datalist id="educationList">
                        <option value="Diploma" />
                        <option value="UG" />
                        <option value="PG" />
                    </datalist>


                    <label htmlFor="degree" >degree:</label>
                    <input type="text" onChange={getDegree} id="degree" className="border rounded p-2 focus:outline-none " />

                    <label htmlFor="passedOut" >passedOut:</label>
                    <input type="text" onChange={getPassedOut} id="passedOut" className="border rounded p-2 focus:outline-none " />


                    <label htmlFor="college" >college:</label>
                    <input type="text" onChange={getCollege} id="college" className="border rounded p-2 focus:outline-none " />

                     <label htmlFor="tk" >tk:</label>
                    <input type="text" onChange={getTk} id="tk" className="border rounded p-2 focus:outline-none " />

                     <label htmlFor="post" >post:</label>
                    <input type="text" onChange={getPost} id="post" className="border rounded p-2 focus:outline-none " />

                     <label htmlFor="city" >city:</label>
                    <input type="text" onChange={getCity} id="city" className="border rounded p-2 focus:outline-none " />

                     <label htmlFor="pinCode" >pinCode:</label>
                    <input type="number" onChange={getPinCode} id="pinCode" className="border rounded p-2 focus:outline-none " />
                    <div className="flex items-center justify-center">
                        <button type="button" onClick={newRecord} className="bg-blue-700 text-white px-4 py-2 rounded text-center ">Add</button>
                    </div>

                </form>
            </div>
        </>
    );
}
export default New;
