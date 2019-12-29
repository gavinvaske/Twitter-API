import express from "express"
import {AddressInfo} from "net"
import controllers from './controller'

const app = express()

app.set('port', 5000)
app.use(controllers)

const server = app.listen(app.get('port'), () => {
    console.log('info', `Server started. Listening at: ${(<AddressInfo>server.address()).address}:${(<AddressInfo>server.address()).port}`)
})