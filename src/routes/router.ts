const product = require("../controller/productController")
module.exports = function (app: any) {
	app.route("/products").get(product.getAllProducts)
	app.route("/product").get(product.getDetail)
	app.route("/product").post(product.create)
	app.route("/product").patch(product.update)
	app.route("/product").delete(product.delete)
}
