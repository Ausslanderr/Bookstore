import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";
const app = express()


import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";
import session from "express-session";


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    key: "userId",
    secret: "teste",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24 *1000 ,
    },
}))

app.use("/", userRoutes)
app.listen(8800, ()=>{
    console.log("servidor de pé");
})