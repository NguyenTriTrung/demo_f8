const express = require('express');
const app = express();
const path = require('path');
const handerbars = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override')
const port = 3000;
const route = require('./routes/index.route');
const db= require("./config/db/index");
//app.get("/",(req,res)=>res.send("Hello World!"));
db.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(methodOverride('_method'));
app.use(express.json());
app.use(morgan('combined'));
app.engine(
    '.hbs',
    handerbars({
        extname: '.hbs',
        helpers:{
            sum: (a,b)=> a+b,
        }
    }),    
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'sources','views'));
route(app);
app.listen(port, () =>
    console.log(`app listening at http://localhost:${port}`),
);
