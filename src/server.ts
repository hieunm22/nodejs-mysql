require("dotenv").config()

const express = require("express")
const bp = require("body-parser")
const app = express()

// app.use(bp.json())
// app.use(bp.urlencoded({ extended: true }))
app.use(express.json())

// ------------------------------------------------------------

const routes = require("./routes/router") //importing route
routes(app)

const port = process.env.PORT

app.use(function (req: any, res: any) {
	res.status(404).send({ url: req.originalUrl + " not found" })
})

app.listen(port)
