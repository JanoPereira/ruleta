const express =require('express');

const app = express();

const path = require('path');

app.set('view engine','ejs');
app.use(express.static('./public'));

//Para que render busque en src/views
app.set('views', path.resolve(__dirname, './views'));

// Para capturar el body
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Cookie-parser
const cookieParser =require('cookie-parser');
app.use(cookieParser());

// Mehtod-override --> Para usar put y delete (?_method=...)
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Rutas
const mainRouter = require('./routes/mainRouter.js');
app.use('/',mainRouter);


// Correr el servidor

const PORT = process.env.PORT || 4500;

app.listen(PORT,()=>{
    console.log(" 🚀 Se levanto proyecto en htpp://localhost:" + PORT)
})

