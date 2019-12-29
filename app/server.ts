import express from "express"
import {AddressInfo} from "net"

const app = express()

app.set('port', 5000)

const server = app.listen(app.get('port'), () => {
    console.log('info', `Server started. Listening at: ${(<AddressInfo>server.address()).address}:${(<AddressInfo>server.address()).port}`)
})