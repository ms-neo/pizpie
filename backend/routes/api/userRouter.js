const express = require('express')
const userRouter = express.Router()
const bcrypt = require('bcrypt')
const User = require('../../models/users')
const { generateToken} = require('../../utils.js')

// @route POST api/users/register
//@desc Sign up
//@access Public
userRouter.post('/register', async (req, res) => {

    const {
        name,
        email,
        password
    } = req.body

    try {
        // to check if the user exist or not by checking the email
        let user = await User.findOne({
            email
        })
        if (user) {
            return res.status(400).json({
                    message: 'User is exist'
            })
        } 
        // get the data from the body and add it to the user
        user = new User({
            name,
            email,
            password: bcrypt.hashSync(password, 8),
        })

        //save the new user
        let createdUser = await user.save()
       
        res.status(201).json({
            _id: createdUser._id,
            name:createdUser.name,
            email:createdUser.email,
            isAdmin:createdUser.isAdmin,
            token : generateToken(createdUser),
        })
    
    } catch (err) {
        console.log(err.message)
       return res.status(500).send('Server Error')
    }

})

// @route POST api/users
//@desc Sign in
//@access Public
userRouter.post('/signin', async (req, res) => {

    // get the data from the body
    const {
        email,
        password
    } = req.body;

    try {
        // find the user by the email
        const user = await User.findOne({ email })
        // check if the user is not exist "the email not registered"
        if (!user) {
            return res.status(400).json({
          
                    message: "Invalid Credintial"
            
            })
        }
 //check if the entered password and the crypted password from the db are the same
        const isMatch = await bcrypt.compareSync(password, user.password)

        if (!isMatch) {
            return res.status(400).json({
            
                    message: " wrong email or password"
                
            })
        }
        // generate web token to authorize the user
        const token = generateToken(user._id)
        console.log(token ,'sign in router')
        const userInfo ={
            _id:user._id,
            name:user.name,
            email:user.email,
            token:token
        }
    
        res.json(userInfo)

    } catch (err) {
        console.log(err.message);
        res.status(500).json({
            message: "Server Error"
        })
    }

})

// get all users
userRouter.get('/', async (req, res) => {
try {
    const users = await User.find()
    res.json(users)
} catch (error) {
    res.status(500).json({
        message: "Server Error"
    })
}
})


// GET USER BY ID
userRouter.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        console.log(user)
        return res.json(user)
    } catch (error) {
        console.log(err.message);
     return   res.status(500).json({
            message: "Server Error"
        })
    }
    })


// Delete User
userRouter.delete('/:id', async (req, res) => {
    try {
        const userid = req.params.id
        console.log(userid, 'id');
        const user = await User.findById(userid)
        user.remove()
        console.log(user)
        res.json('deleted')
        // await User.findOneAndRemove({user:req.user._id})
    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            message: "Server Error"
        })
    }

})



module.exports = userRouter