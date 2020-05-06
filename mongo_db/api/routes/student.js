const Student= require('../../models/student')
module.exports=function(router){
    router.get('/student',function(req,res){
        Student.find({}, (err, student)=>{
            //Check if error
            if(err){
                res.json({sucess:false,message:err});
            }
            else{
                if(!student){
                    res.json({sucess:false,message:'No details found'});//false 
                }else{
                    res.json({sucess:true,student:student});//true 
                }
            }
        })
       
    })

    //Post: Get new meeting note document


    router.post('/standup',function(req,res){
        let note=new Standup(req.body)
        note.save(function(err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })


    router.put('/updateStandup',(req,res)=>{
        if(!req.body._id){
            res.json({sucess:false,message:'No standuo id provided'});

        }else{
            Standup.findOne({_id:req.body._id},(err,standup)=>{
                if(err){
                    res.json({sucess:false,message:'No standuo id provided'});
                }
                else{
                    standup.teamMember=req.body.teamMember;
                    standup.project=req.body.project;
                    standup.workYesterday=req.body.workYesterday;                   //while running   http://localhost:8081/api/Updatestandup
                    standup.workToday=req.body.workToday;
                    standup.impediment=req.body.impediment;
                    standup.createOn=req.body.createOn;
                    standup.save((err)=>{
                        if(err){
                            res.json({sucess:false,message:err});
                        }else{
                            res.json({sucess:true,message:'Standup updates!'});
                        }
                    })
                }
            })
        }
    })

    router.delete('/deleteStandup/:id',(req,res)=>{
        if(!req.params.id){
            res.json({sucess:false,message:'No id Provided'});
        }else{
            Standup.findOne({_id:req.params.id},(err,standup)=>{
                if(err){
                    res.json({sucess:false,message:'Invalid Id'});
                }else{
                    standup.remove((err)=>{
                        if(err){
                        res.json({sucess:false,message:err});
                        }
                        else{
                            res.json({sucess:true,message:'Standup deleted!'});
                        }
                    })
                }
            })
        }
    })

}
