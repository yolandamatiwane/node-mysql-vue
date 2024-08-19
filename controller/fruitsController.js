import {getFruitsDb,getFruitDb,deleteFruitDb,insertFruitDb, updateFruitDb, addToCartDb} from '../model/fruitsDb.js'
import { getUserDb } from '../model/fullstackDb.js'

const fetchFruits= async (req,res)=>{
    res.json(await getFruitsDb())
}

const fetchFruit = async (req,res)=>{
    res.json(await getFruitDb(req.params.id))
}

const deleteFruit = async (req,res)=>{
    res.json( await deleteFruitDb(req.params.id))
}
const insertFruit = async (req,res)=>{
    let {name,weight,amount}=req.body
    await insertFruitDb(name,weight,amount)
}

const updateFruit = async (req,res)=>{
    let {name,weight,amount}=req.body
    let fruits = await getFruitDb(req.params.id)

    name? name=name : name = fruits.fruit_name  
    weight? weight=weight : weight = fruits.weight
    amount? amount=amount : amount = fruits.amount

    res.json(await updateFruitDb(req.params.id,name,weight,amount))
}

const addToCart = async (req,res)=>{
    console.log(req.body);
    let {id} = await getUserDb(req.body.user)
    console.log(id)
    await addToCartDb(req.body.id,id)
    res.json({message:"You've added an item to the cart"})
}

export {fetchFruits,fetchFruit,deleteFruit, insertFruit, updateFruit, addToCart}