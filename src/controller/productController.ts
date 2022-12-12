const repo = require("../repository/productReporsitory")
const connection = require("../connection")

module.exports = {
	getAllProducts: (req: any, res: any) => {
		connection.query("SELECT * FROM products", repo.getAllProducts(res))
	},
	detail: (req: any, res: any) => {
		connection.query(
			"SELECT * FROM products where id = ?",
			[req.query.id],
			repo.getDetail(res)
		)
	}
}
