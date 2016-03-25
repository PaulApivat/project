
 
var d = new Date();
var month = d.getMonth() + 1;
var day = d.getDate();
var year = d.getFullYear();
var date = month + "/" + day + "/" + year;

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

document.getElementById('current_date').innerHTML = date;




 // var today = new Date();
 // document.getElementById('time').innerHTML=today;

 // var hour = today.getHours();
 // document.getElementById('hour').innerHTML=hour;

 // var min = today.getMinutes();
 // document.getElementById('min').innerHTML=min;


//To Do List App
//First function clears textbox with .val('') once it's clicked

//$(document).ready(function(){
//	$('input[name=message]').click(function(){
//		$(this).val('');
//	});
//});

//Second function takes whatever is entered into textbox and prints it below

$(document).ready(function(){
	$('button').click(function(){
		var toAdd = $('input[name=message]').val();
			$('#messages').append("<p>" + toAdd+"</p>");
	});
});

//Third function highlights textbox in red when clicked. Updated to include additiona .val('') function with LESS code

$(document).ready(function(){
	$('input').focus(function(){
		$(this).css('outline-color', '#FF0000'), $(this).val('');
	});
});


