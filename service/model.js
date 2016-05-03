module.exports =  function(data) {
	/*
	主体数据
	 */
	this.data = data

	/*
	type字段,该id是什么类型的
	 */
	var typeNumReg = /\d+/
	var theId = typeNumReg.exec(data.expr)
	var typeReg = new RegExp('"(\\w+)":'+theId[0])
	if (data.entities.length > 1 ) {
		data.entities.shift()
	}
	//不知为何如果是Id以为的类型都会出现一个Id为该值的数据
	//所有的 FId , CID 等,均存在一个相同的 Id 值
	typeReg.exec(JSON.stringify(data.entities[0]))

	this.value = theId[0]
	this.type = RegExp.$1
}