import {pool} from '../config/config.js'


const getFruitsDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM fruits') 
    return data
}
// console.log(await getFruitsDb())

const getFruitDb = async (id)=>{
    let [[data]] = await pool.query(`
        SELECT *
        FROM fruits
        WHERE id = ?`,[id]) 
    return data
}


const deleteFruitDb = async(id)=>{
    await pool.query(`
        DELETE 
        FROM fruits
        WHERE id= ?`,[id])
}

const insertFruitDb = async(name,weight,amount)=>{
    let [data] = await pool.query(`
        INSERT INTO fruits (fruit_name,weight,amount)
        VALUES (?,?,?)`, [name,weight,amount])
}

const updateFruitDb = async(id,name,weight,amount)=>{
    let [data] = await pool.query(`
        UPDATE fruits
        SET fruit_name=?,weight=?, amount=?
        WHERE id=?`, [name,weight,amount,id])
    return data
}

const addToCartDb = async(user_id,fruit_id)=>{
    await pool.query(`
        INSERT INTO cart (user_id,fruit_id)
        VALUES (?,?)`, [user_id,fruit_id])

}

export {getFruitsDb,getFruitDb,deleteFruitDb,insertFruitDb, updateFruitDb, addToCartDb}