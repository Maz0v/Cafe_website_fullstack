import User from "../model/userModel.js"
import bcrypt from "bcryptjs"

export const signUp = async (req, res) => {
    try {
        const { fullname, email, password } = req.body

        const userAlreadyExist = await User.findOne({ email })
        const hashPassword = await bcrypt.hash(password, 10)

        if (userAlreadyExist) {
            res.status(400).send({message:"User already exist."})
        } else {
            const createUser = await User.create({ fullname: fullname, email: email, password: hashPassword })
            res.status(201).send({message:"User created successfully", user:{
                _id:createUser._id,
                fullname:createUser.fullname,
                email:createUser.email
            }})
        }
    } catch (error) {
        res.status(500).send("Error" + error.message)
        console.log(error)
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        console.log(user)
        const isMatch = bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            res.status(400).send("Invalid username or password")
        } else {
            res.status(200).send({
                message: "User Login successful", user:
                {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }
            })

        }
    } catch (error) {
        res.status(500).send("Error" + error.message)
        console.log(error)
    }
}

