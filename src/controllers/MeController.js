const Course=require("../models/Course.model")
const {multipleMongooseToObject}=require("../util/mongoose")
class CoursesController {
    show(req,res,next){
        Promise.all([Course.find({}),Course.countDocumentsDeleted()])
        .then(([courses,deletedCount])=>
            res.render('me/stored',{
                deletedCount:deletedCount,
                Course:multipleMongooseToObject(courses)
            })).catch(next);
    }
    showTrash(req,res,next){
        Course.findDeleted({}).then(courses=>res.render('me/trash',{
            Course:multipleMongooseToObject(courses)
        })).catch(next);
    }
}
module.exports = new CoursesController();