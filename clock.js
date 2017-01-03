function timer(){
	var date = new Date();
	var s = date.getSeconds();
	var m = date.getMinutes();
	var h = date.getHours();
	var d = date.getDay();
	var mh = date.getMonth();
	var y = date.getFullYear();
	
	if(s<10) {
		s = "0" + s
	};
	if(m<10) {
		m = "0" + m
	};
	if(h<10) {
		h = "0" + h
	};
	if(d<10) {
		d = "0" + d
		 };
	if(mh<10) {
		mh = "0" + mh
		  };
	
	now = h + ":" + m + ":" + s + ", " + d + "." + mh + "." + y;
	
	$("#now").html(now);
	$("#s").html(s);
	$("#m").html(m);
	$("#h").html(h);
	$("#d").html(d);
	$("#mh").html(mh);
	$("#y").html(y);
}
	window.onload = timer;
	window.setInterval(function(){
		timer();
	}, 1000);
