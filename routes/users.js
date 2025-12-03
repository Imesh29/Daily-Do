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


module.exports = router;