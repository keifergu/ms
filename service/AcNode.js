var data = {
    "expr": "Id=2152195021",
    "entities": [
        {
            "logprob": -14.549,
            "Id": 2152195021,
            "AA": [
                {
                    "AuId": 2161417001
                },
                {
                    "AuId": 2334971763
                }
            ],
            "F": [
                {
                    "'FId'": 8880873
                },
                {
                    "FId": 50644808
                },
                {
                    "FId": 154945302
                },
                {
                    "FId": 119857082
                },
                {
                    "FId": 41008148
                }
            ],
            "C": {
                "CId": 1161424158
            }
        }
    ]
}

function acnode(data) {
	/*
	主体数据
	 */
	this.entities = data.entities

	/*
	type字段,该id是什么类型的
	 */
	var typeNumReg = /\d+/
	var theId = typeNumReg.exec(data.expr)
	var typeReg = new RegExp('"(\\w+)":'+theId[0])
	typeReg.exec(JSON.stringify(data.entities))
	this.value = theId
	this.type = RegExp.$1

}

var aa= new acnode(data)
console.log(aa.entities[0].hasOwnProperty('F'))

for (var name in aa.entities[0]){
    if (aa.entities[0].hasOwnProperty(name)) {
        console.log("this is fog (" + name + ") for sure. Value: " + aa.entities[0][name]);
    }
    else {
        console.log(name); // toString or something else
    }
}