var api = require('./api.js')

function oneHop(node_1, node_2) {
	var i,
		answer = [], 
		rid_1  = node_1.RId,
		id_2   = node_2.Id
	for(i=0;i<rid_1.length; i+=1){
		if (rid_1[i] == id_2) {
			return ture
		}
	}
}
