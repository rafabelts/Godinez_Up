// Inicio el server
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
require('dotenv').config()
const { auth } = require('./firebase_options');
const { createUserWithEmailAndPassword, updateProfile } = require('firebase/auth');


const corsOptions = {
	origin: "http://localhost:3000", // Solo permite peticiones de este origen
	credentials:true, 
	optionSuccessStatus:200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Metodo post para llamar a la funcion de creacion de cuenta
app.post("/SignUp", async(req, res) => {
	try{
		const {name, email, password} = req.body;
		createUserWithEmailAndPassword(auth, email, password).then(
			({ userCredential }) => {
				res.status(200).send("Usuario creado");	
				//updateProfile(userCredential, { displayName: name });
			}
		).catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			res.status(500).send("Error")
		});
	} catch(e) {
		res.send('Error');
	}
});
 
app.get("/app", (req, res) => {
	const user = auth.currentUser;
	const user_data = {
		name: user.displayName,
		email: user.email,
	}
	res.json(user_data);
})

app.get("/SignUp", async(req, res) => {
	res.send("In sign up")
	
});

app.listen(process.env.PORT, () => {
	console.log(`Listening at ${process.env.PORT}`)
});
	
