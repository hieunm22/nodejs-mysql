const repo = require("../repository/productReporsitory")
const mysqlconn = require("../connection")

module.exports = {
	getAllProducts: (req: any, res: any) => {
		const sql = "SELECT * FROM products"
		const handle = mysqlconn.query(sql, [], (err: any, response: any) => {
			res.send(response)
		})
	},
	detail: (req: any, res: any) => {
		const sql = "SELECT * FROM products where id = ?"
		const handle = mysqlconn.query(sql, [req.query.id], (err: any, response: any) => {
      if (response.length === 0) {
        res.send({})
      }
			res.send(response[0])
		})
	}
}
