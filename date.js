
 var today = new Date();
 document.getElementById('time').innerHTML=today;

 var hour = today.getHours();
 document.getElementById('hour').innerHTML=hour;

 var min = today.getMinutes();
 document.getElementById('min').innerHTML=min;

//function timeNow(i){
//	var d = new Date();
//			h = (d.getHours()<10?'0':'') + d.getHours(),
//			m = (d.getMinutes()<10?'0':'') + d.getMinutes();
//	i.value = h + ':' + m;
//}

//document.getElementById(timeNow).innerHTML=today;