const Course=require("../models/Course.model")
const {mongooseToObject}=require("../util/mongoose")

class CoursesController {
    show(req, res) {
        //_id la thuoc tinh cua csdl, con slug la thuoc tinh tren thanh url 
      Course.findOne({slug:req.params.slug}).then(
          course=>{
              res.render("courses/coursedetail",{course:mongooseToObject(course)});
          }
      )
    }
    create(req,res){
        res.render("courses/create");
    }
    store(req,res){
        const formData=req.body;
        formData.image=`https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course= new Course(formData);
        course.save().then(()=>res.redirect('/me/stored/courses')).catch(err=>console.log(err));
    }
    edit(req,res,next){
        Course.findById(req.params.id).then(course=>res.render("courses/edit",{
            course:mongooseToObject(course),
        })).catch(next);
    }
    update(req,res,next){
        Course.updateOne({_id:req.params.id},req.body).then(()=>res.redirect('/me/stored/courses')).catch(next);
        //res.send(req.body);
    }
    destroy(req,res,next){
        Course.delete({_id:req.params.id}).then(()=>res.redirect('back')).catch(next);
        
    }
    restored(req,res,next){
        Course.restore({_id:req.params.id}).then(()=>res.redirect('back')).catch(next);
    }
    deleteForce(req,res,next){
        Course.deleteOne({_id:req.params.id}).then(()=>res.redirect('back')).catch(next);
    }
}
module.exports = new CoursesController();