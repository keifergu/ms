var api = require('./api.js')
var AcNode = require('./model.js')
var rule = require('./rule.js')
run(2152195021, 2161417001)

function run(a_number, b_number) {
	var answer = []
	/** 获取 a number 的数据 */
	api.getByNum(a_number, function(err, res) {
		if (res.ok) {
			var aNode = new AcNode(res.body)
			//进行第二个值的获取
			api.getByNum(b_number, function(err, res) {
				if (res.ok) {
					var bNode = new AcNode(res.body)
					//console.log(JSON.stringify(aNode.data),JSON.stringify(bNode.data))
					console.log(aNode,bNode)
					var oneHopResult = rule.compare(aNode, bNode)
					if (oneHopResult) {
						answer.push([a_number,b_number])
					}
				}
			})		
		}
	})
	/** a number 完毕 */
}
