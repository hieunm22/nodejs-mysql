const product = require("../controller/productController")
module.exports = function (app: any) {
	app.route("/products").get(product.getAllProducts)
	app.route("/product").get(product.detail)
}
