const express = require("express");
const router = express.Router();
const Todo = require("../models/users");

router.post("/",async (req,res) => {
    const { task,tags,status } = req.body;
    
    if (!task) {
    return res.status(400).json({ message: "Task is required!" });
    }
    if (!tags) {
    return res.status(400).json({ message: "Tags are required!" });
    }
    if (!status) {
    return res.status(400).json({ message: "Status is required!" });
    }

    const todo =await Todo.findOne({task:task});

    if(todo){
        return res.status(400).json({message: "Todo is already exist!!"})
    }

    const newTodo = new Todo({
        task: task,
        tags:tags,
        status:status
    })
    
    console.log(newTodo);

    await newTodo.save();
    res.status(201).json(newTodo);
});

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find(); // fetch all documents from Todo collection
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.get("/:id",async (req,res) => {
    try{
        const todo =await Todo.findById(req.params.id);
    
        if(!todo){
            return res.status(404).json({message: "Todo not found!"});
        }
        res.status(200).json(todo);
    }catch(err){
        res.status(500).json({message:"Server error!",err});
    }
});

router.put("/:id",async (req,res) =>{
    try{
        const todo = await Todo.findById(req.params.id);
        const { task,tags,status } = req.body;

        if(!todo){
            return res.status(404).json({message: "Todo not found!"});
        }

        if(task != undefined) todo.task = task;
        if(tags != undefined) todo.tags = tags;
        if(status != undefined) todo.status = status;

        const updatedTodo = await todo.save();
        res.status(200).json(updatedTodo);
    }catch(err){
        res.status(500).json({message: "Server error!!",err});
    }
})


module.exports = router;