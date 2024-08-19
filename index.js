import express from 'express'
import fullstackRouter from './routes/fullstackRouter.js'
import fruitRouter from './routes/fruitsRouter.js'
import cors from 'cors'

let port = process.env.PORT || 3010

const app = express()
app.use(cors({
    origin: 'http://localhost:8080',
    // allows backend to recieve headers with additional information, e.g. cookies
    credentials:true
}))

app.use(express.json())

app.use(express.static('public'))

app.use('/',fullstackRouter)
app.use('/',fruitRouter)


app.listen(port,()=>{
    console.log('http://localhost:'+port);
    
})