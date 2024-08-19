import { getUsersDb, getUserDb, insertUserDb,deleteUserDb,updateUserDb } from "../model/fullstackDb.js"
import {hash} from 'bcrypt'

const fetchUsers = async (req,res)=>{
    res.json(await getUsersDb())
}

const fetchUser = async (req,res)=>{
    res.json(await getUserDb(req.params.id))
}

const insertUser = async (req,res)=>{

    let {name,surname,age,code,car,color,username,password}=req.body
    let hashedP = await hash(password,10)
    //if(hashedP.stack) throw hashedP //to account for not using err handling
    // // Below uses error handling and call back funct
    // hash(password,10,async (err, hashedP)=>{
    //     if(err) throw err
    //     console.log(hashedP)
    //     await insertUserDb(name,surname,age,code,car,color,username,hashedP)
    // })
    res.json({message:"User created successfully"})
    // await insertUserDb(name,surname,age,code,car,color,username,hashedP)
}

const deleteUser = async (req,res)=>{
    res.json( await deleteUserDb(req.params.id))
}

const updateUser = async (req,res)=>{
    let {name,surname,age,code,car,color}=req.body
    let users = await getUserDb(req.params.id)

    name? name=name : name = users.name
    surname? surname=surname : surname = users.surname
    age? age=age : age = users.age
    code? code=code : code = users.fav_coding_lang
    car? car=car : car = users.fav_car
    color? color=color : color = users.eye-color
    res.json(await updateUserDb(req.params.id,name,surname,age,code,car,color))
}

const loginUser = (req,res)=>{
    res.json({
        message:"You have signed in !!",
        token:req.body.token
    })
}


export {fetchUsers,fetchUser,insertUser, deleteUser, updateUser, loginUser}