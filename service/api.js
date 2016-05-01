var superagent = require('superagent')

/**
 * 根据expr表达式获得数据,例如 Y=1995
 * @param  {string}   query    express表达式,详细见微软文档,形式为: Y=195
 * @param  {string}   attr     以逗号隔开的要获取的属性表
 * @param  {Function} callback 完成网络请求后的回调函数,传入err和res两个参数
 * @return {[type]}            [description]
 */
function get(query, attr, callback) {
	superagent
		.get('https://oxfordhk.azure-api.net/academic/v1.0/evaluate')
		.query({
			'expr':query,
			'count':10,
			'attributes':attr,
			'subscription-key':'f7cc29509a8443c5b3a5e56b0e38b5a6'
		})
		.end(callback)
}

/**
 * 根据所给的Id查找主体
 * @param  {number} number Id
 * @return {[type]}        [description]
 */
function getByNum(number, callback) {
	/**
	OR(
		OR(
			OR(
				Id=2152195021,
				Composite(C.CId=2152195021)
			),
			OR(
				Composite(AA.AuId=2152195021),
				Composite(AA.AfId=2152195021)
			)
		),
		OR(
			Composite(F.FId=2152195021),
			Composite(J.JId=2152195021)
		)
	)
	 * @type {String}
	 */
	var query="OR(OR(OR(Id="+number+",Composite(C.CId="+number+")),OR(Composite(AA.AuId="+number+"),Composite(AA.AfId="+number+"))),OR(Composite(F.FId="+number+"),Composite(J.JId="+number+")))";
	var config='Id,AA.AuId,C.CId,J.JId,F.FId,AA.AfId'
	get(query, config, callback)
}

module.exports={
	get:get,
	getByNum:getByNum
};