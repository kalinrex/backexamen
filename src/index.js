const express = require('express');
const app = express();
var cors = require('cors');

// Settings
app.set('port',  process.env.PORT || 3000);
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    credentials: true
}
app.use(cors(corsOptions))
app.options('/', cors())

// Middlewares
app.use(express.json());


//Routes
app.use(require('./routes/cliente'))

app.listen(app.get('port'), () => {
    console.log("Server run on port " + app.get('port'));
})