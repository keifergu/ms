function idToOthers(id_node, other_node) {
	var oValue = other_node.value
	var valueReg = new RegExp(oValue)
	return valueReg.test(JSON.stringify(id_node.entities[0]))
}

