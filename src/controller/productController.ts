const repo = require("../repository/productReporsitory")
const connection = require("../connection")

module.exports = {
	getAllProducts: (req: any, res: any) => {
		connection.query("SELECT * FROM products", repo.getAllProducts(res))
	},
	getDetail: (req: any, res: any) => {
		connection.query(
			"SELECT * FROM products where id = ?",
			[req.query.id],
			repo.getDetail(res)
		)
	},
	create: (req: any, res: any) => {
		connection.query(
			`insert into products(productName, releaseDate, price)
			values (?, ?, ?)`,
			[req.body.productName, req.body.releaseDate, req.body.price],
			repo.create(res)
		)
	},
	update: (req: any, res: any) => {
		connection.query(
			`update products
			set productName = ?,
			releaseDate = ?,
			price = ?
			where id = ?`,
			[req.body.productName, req.body.releaseDate, req.body.price, req.query.id],
			repo.update(res)
		)
	},
	delete: (req: any, res: any) => {
		connection.query(
			`delete from products where id = ?`,
			[req.query.id],
			repo.delete(res)
		)
	}
}
