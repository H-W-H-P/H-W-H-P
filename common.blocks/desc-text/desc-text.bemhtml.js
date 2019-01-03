var info = require('../../desktop.info/info')
var counter = 0

block('desc-text')(
	content()(function () {
		for (var i = 0; i < info.text.length; i++) {
			var textCont = info.text[counter];
			counter++;
			return textCont;
		}
	})
)