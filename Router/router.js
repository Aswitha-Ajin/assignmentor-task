const express=require("express");
const router=express.Router();
const Mentormodule= require("../Module/module");

router.post("/creatementor",Mentormodule.creatementor);
router.post("/createstudent",Mentormodule.createstudent);
router.put("/changestudentmentor/:id",Mentormodule.changestudentmentor);


module.exports=  router;