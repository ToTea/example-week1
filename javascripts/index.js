(function(){

var left = $('.larrow'),
	right = $('.rarrow'),
	pic = $('.pic'),
	tmpl = '<img class="myimg">';

var count = 0;

left.on("click", function(){
	if(count > 0){
		count -= 1;
		pic.find("img").remove();
		$(tmpl).appendTo(pic).attr('src', data[count]);
	}
})

right.on("click", function(){
	if(count < data.length-1){
		count += 1;
		pic.find("img").remove();
		$(tmpl).appendTo(pic).attr('src', data[count]);
	}
	
})


}());