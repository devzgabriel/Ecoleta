import express from 'express'
import cors from 'cors'
import path from 'path'
import routes from './routes'
import { errors } from 'celebrate'

const app = express()

app.use(cors())
// Dentro do cors quando for hospedar:
//{origin: 'https://sasasaa'}


app.use(express.json())

app.use(routes)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
//SELECT * FROM users WHERE name = Diego
//knex('users').where('name','Diego').select('*')

app.use(errors())

app.listen(3333);









//"no-repeat 450px 80px"