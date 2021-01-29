const Course=require("../models/Course.model")
const {multipleMongooseToObject}=require("../util/mongoose")
class HomeController {
    index(req, res) {
        Course.find({}).then(courses=>
        {
             //từ handlbar phiên bản 4.6.0 trở đi thì nó sẽ có thêm 1 cơ chế bảo mật là không cho phép truy cập đối tượng trên view
            //như việc dùng this.name,this.desciption,..., mà ta phải chuyển nó về literal object(ban đầu object(Course) mà nó trả về cho ta được khởi tạo từ function constructor
            //các tên như name,desciption nằm trong protoco)
     
            res.render("home",{
            Courses:multipleMongooseToObject(courses)
            })
        }).catch(err=>next(err));
    }
}
module.exports = new HomeController();
