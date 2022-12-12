const express = require("express")
const app = express()

require("dotenv").config()

const port = process.env.PORT

let routes = require("./routes/router") //importing route
routes(app)

app.use(express.json())    // <==== parse request body as JSON
app.use(function (req: any, res: any) {
	res.status(404).send({ url: req.originalUrl + " not found" })
})

app.listen(port)
