var superagent = require('superagent')

var config='Id,Ti,Y,D,CC,AA.AuN,AA.AuId,AA.AfN,AA.AfId,F.FN,J.JN,C.CN,RId,W,E'

function get(query) {
	superagent
		.get('https://api.projectoxford.ai/academic/v1.0/evaluate')
		.query({
			'expr':query,
			'model':'latest',
			'count':10,
			'attributes':config
		})
		.set('Ocp-Apim-Subscription-Key','30099200a80747a09c926cfbaf37debb')
		.end(function(err,res) {
			if (res.ok) {
				return JSON.stringify(res.body)
			} else {
				return err
			}
		})
}
