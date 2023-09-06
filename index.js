import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

let homeTasks = [];
let workTasks = [];

app.get("/", (req,res)=>{
    if(homeTasks.length>0){
        res.render("index.ejs",{taskList: homeTasks});
    }else{
        res.render("index.ejs");
    }
})
app.get("/home", (req,res)=>{
    if(homeTasks.length>0){
        res.render("index.ejs",{taskList: homeTasks});
    }else{
        res.render("index.ejs");
    }
})

app.get("/work", (req,res)=>{
    if(workTasks.length>0){
        res.render("work.ejs",{taskList: workTasks});
    }else{
        res.render("work.ejs");
    }
})


app.post("/addTaskHome", (req,res)=>{
    homeTasks.push(req.body.taskDesc);
    console.log(homeTasks, homeTasks.length);
    res.render("index.ejs",{taskList: homeTasks});
});
app.post("/addTaskWork", (req,res)=>{
    workTasks.push(req.body.taskDesc);
    console.log(
        workTasks, workTasks.length);
    res.render("work.ejs",{taskList: workTasks});
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})