import express  from "express"
import  dotenv  from "dotenv"
import connectDB from "./config/db.js"
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser"
import cors from "cors"
import morgan from "morgan"
dotenv.config();
const app=express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//cookies and filemiddleware
app.use(cookieParser())


// morgan middlewares
app.use(morgan("tiny"))

// regular middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// import all routes here
import userRoutes from "./routes/userRoutes.js"
// router middleware
app.use("/user",userRoutes);
export default app;