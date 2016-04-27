var superagent = require('superagent')

var config='Id,AA.AuId,C.CId,J.JId,F.FId,AA.AfId'

/**
 * 根据expr表达式获得数据,例如 Y=1995
 * @param  {string}   query    express表达式,详细见微软文档,形式为: Y=195
 * @param  {string}   attr     以逗号隔开的要获取的属性表
 * @param  {Function} callback 完成网络请求后的回调函数,传入err和res两个参数
 * @return {[type]}            [description]
 */
function get(query, attr, callback) {
	superagent
		.get('https://api.projectoxford.ai/academic/v1.0/evaluate')
		.query({
			'expr':query,
			'model':'latest',
			'count':10,
			'attributes':attr ||"Id"
		})
		.set('Ocp-Apim-Subscription-Key','30099200a80747a09c926cfbaf37debb')
		.end(callback)
}

/**
 * 根据一条数据获得该数据的所有返回
 * @param  {object}   data     数据内容,类似{id:195464}
 * @param  {Function} callback 完成请求后的回调函数
 * @return {[type]}            [description]
 */
function getAll(data, callback) {
	var query
	var attr = config
	for(var value in data){
		query = value+"="+data[value]
	}
	get(query,callback)
}

module.exports={
	get:get,
	getAll:getAll
};
