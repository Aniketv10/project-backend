const express = require('express');
require('./db/config');
const Users = require('./db/User');
const cors = require('cors');
const app = express();



app.use(express.json());
app.use(cors());
// const connectDB = async ()=>{
//        mongoose.connect('mongodb://localhost:27017/shop');
//        const mobilesSchema = new mongoose.Schema({});
//        const mobiles = mongoose.model('mobiles',mobilesSchema);
//        const data = await mobiles.find();
//        console.log(data);
    
//     }
//     connectDB();

// app.post("/register",async(req,res)=>{
// let data = req.body;
// if(!data.name){
//     return res.status(400).send("name is a required field");
// }

// if(!data.email){
//     return res.status(400).send("email is a required field");
// }

// if(!data.name){
//     return res.status(400).send("password is a required field");
// }

// if(!data.name){
//     return res.status(400).send("confirm password is a required field");
// }

//     let result = await Users.create(data);
//     res.status(200).send({status:true,msg:result});
// })

app.post("/register",async(req,res)=>{
    const user = new Users(req.body);
    const result = await user.save();
    res.send(result);
})




app.post("/login", async (req, res) => {
    //res.send(req.body);
    console.log(req.body)
    if (req.body.password && req.body.email) {
        let user = await Users.findOne(req.body).select("-password");

        if (user) {
            res.send(user)
        } else {
            res.send({ result: 'No User Found' })
        }
    } else {
        res.send({ result: 'No UserFound' })
    }
})


app.listen(8000,()=>{
    console.log("listening the server on port 8000...")
})