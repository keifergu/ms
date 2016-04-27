/**
 * Id1->Id2 规则,要求Id1的RId等于Id2
 * @param  {number} RId         [description]
 * @param  {object} compareNode 被比较的节点,或者说实体
 * @return {[type]}             [description]
 */
function idToId(RId, compareNode) {
	if (RId == compareNode.Id) {
		return true
	} else {
		return false
	}
}


function idToFId(FId, compareNode) {
	if (FId == compareNode.F.FId) {
		return true
	} else {
		return false
	}
}

function fIdToId (FId, compareNode) {
	if (true) {}
}