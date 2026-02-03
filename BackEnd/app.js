import exp from "express";
import user from "./user.json" assert { type: "json" };
import cors from "cors";

const app = exp();
const port=3000;
//app.use(exp.json());
app.use(cors())

app.listen(port,(err)=>{
    if(err){
        console.log(err.message);
    }
    else console.log('Server start run')
})
app.get('/',(req,res)=>{
    res.send({message:"root"})
});
// send all user
app.get('/api/user',(req,res)=>{
    res.send(user);
});
//send user by id
app.get('/api/user/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    console.log(id);
    if(isNaN(id)){
        return res.status(400).send({message:"wrong user invalide data "});
    }
    const getUser=user.find((i)=>i.id===id);
    if(getUser){
        return res.send(getUser);
    }
    return res.status(402).send({message:"user not found"});
})

//delete user
app.delete('/api/user/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    console.log(id);
    if (isNaN(id)){
        return res.status(400).send({message:"invalide request or user"})
    }
    const updateUser=user.filter((user)=>user.id !==id)
      const exists = user.some(u => u.id === id);

  if (!exists) {
    return res.status(404).json({ message: "User not found" });
  }
    res.send(updateUser)  
    
    
})
