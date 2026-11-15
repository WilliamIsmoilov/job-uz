import express from 'express'
import path from 'path'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import { MORGAN_FORMAT } from './libs/config'
import router from './router'
import routerAdmin from './adminRouter'

const app = express()

export default app

app.use(express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static('./uploads'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ credentials: true, origin: true }))
app.use(cookieParser())
app.use(morgan(MORGAN_FORMAT))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
/** 4-router */

app.use('/', router)
app.use('/admin', routerAdmin)
