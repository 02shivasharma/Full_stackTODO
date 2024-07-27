const express = require("express");
const {createTodo, updateTodo} = require("./types")
const {todo} = require("./db")
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors())

app.post('/todo', async(req, res)=>{
    const customPayLoad = req.body;
    const parsePayLoad =  createTodo.safeParse(customPayLoad);

    if(!parsePayLoad.success){
        res.status(411).json({
            msg : "types are not acceptbale"
        })
        return;
    }
     await todo.create({
        title : customPayLoad.title,
        description : customPayLoad.description,
        completed : false
    })
    
    res.json({
        msg : "Todo created sucessfully"
    })


})

app.get('/todos', async(req,res)=>{
     const todos = await todo.find({});

    res.json({
        todos
    })

})

app.put('/completed', async(req, res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);

    if(!parsePayload.success){
        res.json({
            msg : "id is not valid"
        })
        return;
    }
    
    await todo.updateOne({
        _id : req.body.id
    },{
        completed : true
    })
    res.json({
        msg : "todo updated sucessfully"
    })

})
app.listen(3000)
