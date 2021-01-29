const newsRoute = require('./news.route');
const homeRoute = require('./home.route');
const siteRoute = require('./site.route');
const courseRoute=require('./courses.route')
const meRoute=require('./me.route')
function Route(app) {
    app.use('/news', newsRoute);
    // app.use()
    app.use('/me',meRoute);
    //app.use () được sử dụng để Gắn chức năng phần mềm trung gian hoặc gắn kết với một đường dẫn cụ thể, chức năng phần mềm trung gian được thực thi khi đường dẫn cơ sở khớp.
    app.use('/search', siteRoute);
    app.use('/courses',courseRoute);
    app.use('/', homeRoute); //gắn đường dẫn /home vào homeRoute()  hay ./home.route
}
module.exports = Route;
