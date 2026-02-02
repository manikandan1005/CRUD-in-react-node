import exp from "express";
import user from "./user.json" assert { type: "json" };

const app = exp();
const port=3000;
app.use(exp.json())

app.listen(port,(err)=>{
    if(err){
        console.log(err.message);
    }
    else console.log('Server start run')
})
app.get('/',(req,res)=>{
    res.send({message:"root"})
});

app.get('/api/user',(req,res)=>{
    res.send(user);
});
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
