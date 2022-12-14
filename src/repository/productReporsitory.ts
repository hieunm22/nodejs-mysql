module.exports = {
	getAllProducts: (res: any) => (err: any, response: any) => {
		return res.send(response)
	},
	getDetail: (res: any) => (err: any, response: any) => {
		const send = response && response.length > 0 ? response[0] : {}
		return res.send(send)
	},
	create: (res: any) => (err: any, response: any) => {
		return res.send(response)
	},
	update: (res: any) => (err: any, response: any) => {
		return res.send(response)
	},
	delete: (res: any) => (err: any, response: any) => {
		return res.send(response)
	}
}
