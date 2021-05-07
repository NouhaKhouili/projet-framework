const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');

dotenv.config();


const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use('/app',routesUrls)

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
	console.log("Connexion à la base de données MongoDB établie avec succès ");
})

//const test = require('./routes/routes');
//const usersRouter = require('./routes/users');

//app.use('/singup', test);
//app.use('/users', usersRouter);

app.listen(port, () => {
	console.log('le serveur fonctionne sur le port:' + port);
});

/*const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');

dotenv.config()
mongoose.connect(process.env.ATLAS_URI,()=>console.log("Database connected"))

app.use(cors());
app.use(express.json());
app.use('/app',routesUrls)

app.listen(5000,()=> console.log("server is up and running"))*/