import {pool} from '../config/config.js'

// for users

const getUsersDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM users') 
    return data
}
// console.log(await getUsersDb())

const getUserDb = async (username)=>{
    let [[data]] = await pool.query(`
        SELECT *
        FROM users
        WHERE username = ?`,[username]) 
    return data
}
// console.log(await getUserDb(1))

const insertUserDb = async(name,surname,age,code,car,color,username,password)=>{
    let [data] = await pool.query(`
        INSERT INTO users (name,surname,age,fav_coding_lang,fav_car,eye_color,username,password)
        VALUES (?,?,?,?,?,?,?,?)`, [name,surname,age,code,car,color,username,password])
}

const deleteUserDb = async(id)=>{
    await pool.query(`
        DELETE 
        FROM users
        WHERE id= ?`,[id])
}

const updateUserDb = async(id,name,surname,age,code,car,color)=>{
    let [data] = await pool.query(`
        UPDATE users
        SET name=?,surname=?,age=?,fav_coding_lang=?,fav_car=?,eye_color=?
        WHERE id=?`, [name,surname,age,code,car,color,id])
    return data
}




export {getUsersDb,getUserDb,insertUserDb, deleteUserDb, updateUserDb }