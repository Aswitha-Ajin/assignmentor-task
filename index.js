const express = require("express");
const Mentorrouter = require("./Router/router");
const mongo = require("./connect");
const dotenv=require("dotenv");

dotenv.config();
mongo.connect();

const app=express();
app.use(express.json());

app.use('/',(req,res,next)=>{
    var auth={ authorised:true };

    if(auth.authorised){
     next(); 
    }else{
     res.send([
        {
            'msg':'not authorised'
        }
     ]);
   }
}); 

app.use('/assignmentor',Mentorrouter); 

app.listen(process.env.PORT);