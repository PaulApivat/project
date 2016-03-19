
 var today = new Date();
 document.getElementById('time').innerHTML=today;

 var hour = today.getHours();
 document.getElementById('hour').innerHTML=hour;

 var min = today.getMinutes();
 document.getElementById('min').innerHTML=min;


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


