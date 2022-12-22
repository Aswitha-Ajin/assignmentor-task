const { ObjectID } = require("bson");
const  mongo  = require("../connect.js");
const { ObjectId } = require("mongodb");

  
module.exports.creatementor=async(req,res,next)=>{
    try{
      responseInserted = await mongo.selectedDB.collection("mentors").insertOne(req.body);
      res.send(responseInserted);
    }catch(error){
        console.error(error);
        res.status(500).send(error);
    }

};

module.exports.createstudent=async(req,res,next)=>{
    try{
      responseInserted = await mongo.selectedDB.collection("students").insertOne(req.body);
      res.send(responseInserted);
    }catch(error){
        console.error(error);
        res.status(500).send(error);
    }

};



module.exports.changestudentmentor=async(req,res,next)=>{

  try{
    const student_id=req.params.id; const mentor_id=req.body.mentor_id;
    const updatedData= await mongo.selectedDB.collection("mentor_student").findOneAndUpdate(
    { student_id: student_id },
    { $set: { 'mentor_id':mentor_id } },
    { returnDocument: "after" },   
    );
    res.send({"msg":" success"});
    }  catch(error){
        res.status(500).send(error);
    } 
};

