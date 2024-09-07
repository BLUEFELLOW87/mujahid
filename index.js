import express from "express";
import path from 'path'
import { fileURLToPath } from "url";

const app = express();

app.listen(3000,()=>{
    console.log("done!");
})

const __filename = fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render("index");
})


app.get('/aboutus',(req,res)=>{
    res.render("aboutus");
})


app.get('/contactus',(req,res)=>{
    res.render("contactus");
})