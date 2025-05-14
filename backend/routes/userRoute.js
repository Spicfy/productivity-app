const express = require('express')




const router = express.Router()
const userController = require('../Controllers/userController')
const auth = require('../middleware/auth')

// Routes for user 

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/profile', auth, userController.getProfile)
router.put('/profile', auth, userController.updateProfile)
router.delete('/delete', auth, userController.deleteAccount)


module.exports = router