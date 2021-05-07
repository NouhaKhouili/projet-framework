const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SingupModel')
const bcrypt = require('bcrypt')


router.post('/singup', async (request,response)=>{

	//cryptage du mot de passe
	const saltPassword = await bcrypt.genSalt(10)

	//hashage du mot de passe
	const securePassword = await bcrypt.hash(request.body.password, saltPassword)
	
	const signedUpUser = new signUpTemplateCopy({
		fullName:request.body.fullName,
		userName:request.body.userName,
		email:request.body.email,
		password:securePassword
	})

	signedUpUser.save()
	.then(data=>{
		response.json(data)
	})
	.catch(error=>{
		response.json(error)
	})
})


module.exports = router