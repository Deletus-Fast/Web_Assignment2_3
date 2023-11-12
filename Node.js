const express = require("express")
const mongoose = require("mongoose")
const app = express();
//shcemas
const user = require("./Models/user.schema");
const BlogPost = require("./Models/blogPost.schema")
const follow = require("./Models/follow.schema")
const comment = require("./Models/comment.schema")

//routes
const Userrouter = require("./Routes/UserRoutes")
const blogRouter = require("./Routes/BlogPostRoutes")

// middleware
const { AuthenticateAdmin } = require("./Middleware/AuthenticateAdmin")
const { AuthenticateUser } = require("./Middleware/AuthenticateUser")
const { VerifyCreator } = require("./Middleware/VerifyCreator")

const jwt = require("jsonwebtoken")

require("dotenv").config()

app.use(express.json())
const cors = require("cors")
require("dotenv").config()
app.listen(3000)
app.use(cors({
    origin:'*'
}))

app.use("/user" ,   Userrouter)
app.use("/blog" , blogRouter)


app.get("/" , (req , res)=>{
    res.json({"Message":"Hello"})
})

mongoose.connect(process.env.MONGODB_STRING).then(()=>{
    console.log("Connected")
}).catch(err=>{
    console.log(err)
})