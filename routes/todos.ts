
import { Router } from 'express';
import { todos } from '../models/todos';

const router  = Router();

let todo : todos [] = []

router.get('/',(req,res,next)=>{
     res.status(200).json({Todos : todo})   
})

router.post('/todos',(req,res,next)=>{
    const newTodo = {
        id : new Date().toISOString(),
        text : req.body.text
    }

    todo.push(newTodo);
    console.log(todo);
    console.log(req.body);

    res.status(200).json({ "message" : "done" })
})

router.post('/delete',(req,res,next)=>{
let id = req.body.Id;
console.log(id);
const reqIdIndex = todo.findIndex(element =>{
    console.log(element.id)
    return element.id === id
});
console.log(reqIdIndex)
if(reqIdIndex >=0 ){
    todo.splice(reqIdIndex,1);
    res.status(201).json({"message" : "deleted"});
}
else{
    res.status(404).json({"message" : "not found"});
}
})

router.post('/edit',(req,res,next)=>{
    let id = req.body.Id;
    let editedText = req.body.text;
    const reqIdIndex = todo.findIndex(element =>{ return element.id === id });
    if(reqIdIndex >= 0){
        todo[reqIdIndex] = { id : id , text : editedText }
        res.status(201).json({"message" : "edited"})
    }
    else{
        res.status(404).json({"message" : "something went wrong"})
    }
})

export default router