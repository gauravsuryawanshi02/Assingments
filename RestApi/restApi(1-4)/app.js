const express = require('express');
const app = express(); 
const port = process.env.PORT || 3000;
app.use(express.json());

require('./model/inv');

const inv = require('./model/schema');
//create a new inventory

app.post("/inventory",(req,res)=>{
   const user = new inv(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((err)=>{
        console.log(err);
    })
});


app.get('/inventory',async(req,res)=>{
    try{
        const invData= await inv.find();
        res.send(invData);
    }catch(e){

    }
});

app.get('/inventory/Apple',async(req,res)=>{
    try{
        const  apple = await inv.find({"name":"apple"});
        res.send(apple);
    }catch(e){
            console.log(e);
    }
})

//getByname
app.get('/inventory/:id',async(req,res)=>{
    try {
        const _id= req.params.id;
        const namedata = await inv.findById(_id);
        res.send(namedata);
    } catch (error) {
        console.log(error);
    }
})
//Patch

app.patch('/inventory/:id',async(req,res)=>{
    try {
        const _id= req.params.id;
        const idUP = await inv.findByIdAndUpdate(_id , req.body);
        res.send(idUP);
    } catch (error) {
        console.log(error);
    }
})  

//delete
app.delete('/inventory',async(req,res)=>{
    try {
        const del = await inv.deleteMany();
        res.send(del);

    } catch (error) {
        
    }
})
//deleteOne
app.delete('/inventory/:id',async(req,res)=>{
    try {
        const _id= req.params.id;
        const del = await inv.findByIdAndDelete(_id);
        res.send(del);

    } catch (error) {
        
    }
})

app.listen(port,()=>{
    console.log(`listning ${port}`);
});