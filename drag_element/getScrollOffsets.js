//查询窗口滚动条的位置
function getScrollOffsets(w){
	w = w || window;    /*使用指定的窗口，如果不带参数则使用当前窗口*/

	//除了IE8以及更早的版本外，其他浏览器都能使用
	if(w.pageXOffset != null){
		return {x:w.pageXOffset,y:w.pageYOffset};
	}
	//标准模式下的IE(任何浏览器)
	var d = w.document;
	if(document.compatMode == "CSS1Compat"){    //CSS1Compat：标准兼容模式开启
		return {x:d.documentElement.scrollleft,y:d.documentElement.scrollTop};
	}
	//怪异模式下，必须在文档的body元素上查询
	return {x:d.body.scrollleft,y:d.body.scrollTop};
}