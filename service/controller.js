var api = require('./api.js')

run(2152195021, 2161417001)

function run(a_number, b_number) {
	api.getByNum(a_number, function(err, res) {
		console.log(JSON.stringify(res.body))
	})
	api.getByNum(b_number, function(err, res) {
		console.log(JSON.stringify(res.body))
	})
}