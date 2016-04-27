var express = require('express'),
	  app			= express(),
	  api			= require('./api.js')

app.get('/:query',function(req,res) {
	var query = req.params.query
	api.get(query,'',function(apierr,apires) {
			if (apires) {
				res.send(apires.body)
			} else {
				res.send(apierr)
			}
	})
})

app.listen(8120);