const express = require("express");
const router = express.Router();

router.post("/", (req,res) => {
    const todo = req.body;
    
    if (!todo.task) {
    return res.status(400).json({ message: "Task is required!" });
    }
    if (!todo.tags) {
    return res.status(400).json({ message: "Tags are required!" });
    }
    if (!todo.status) {
    return res.status(400).json({ message: "Status is required!" });
    }
    
    console.log("todo");

    res.json(todo);
});



module.exports = router;