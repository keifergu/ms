function idToOthers(id_node, other_node) {
	if (id_node.type != "Id") {
		return false
	}
	var oValue = other_node.value
	var valueReg = new RegExp(oValue)
	return valueReg.test(JSON.stringify(id_node.data))
}

function idToid(id_node, other_node) {
	if (id_node.type != "Id" && other_node.type != "Id") {
		return false
	}
	var idRid = id_node.data.entities[0].RId
	if (idRid == other_node.value) {
		return true
	} else {
		return false
	}
}

function auidToafid(au_node, af_node) {
	if (au_node.type != "AuId" && af_node.type != "AfId") {
		return false
	}
	var afValue = af_node.value
	var valueReg = new RegExp(afValue)
	return valueReg.test(JSON.stringify(au_node.data))
}

exports.compare = function(aNode, bNode) {
	switch(aNode.type) {
		case "Id":
			if (bNode.type == "Id") {
				return idToid(aNode, bNode)
			}
			return idToOthers(aNode, bNode)
		case "AuId":
			if(bNode.type == "AfId") {
				return auidToafid(aNode, bNode)
			}
			//此处不 break ,可能 bnode 是 Id 的情况
		case "AfId":
			if(bNode.type == "AuId") {
				return auidToafid(bNode, aNode)
			}
		default :
		  /*
		  当 aNode 的 type 不为Id时,此时默认为 bNode 的 type 为 Id
		  如果均不为 Id,则会返回 false ,在 idtoOther 方法中处理
		   */
			return idToOthers(bNode, aNode)
	}
}