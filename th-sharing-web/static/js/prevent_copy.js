    $(window).on('keydown',function(event)
    {
    if(event.keyCode==123)
    {
        alert('ห้ามใช้บนหน้านี้ครับ!');
        return false;
    }
    else if(event.ctrlKey && event.shiftKey && event.keyCode==73)
    {
        alert('ห้ามใช้บนหน้านี้ครับ!')
        return false; 
    }
    else if(event.ctrlKey && ((event.keyCode==73) || (event.keyCode==85) || (event.keyCode==88) || (event.keyCode==67) || (event.keyCode==86) || (event.keyCode==2) || (event.keyCode==3) || (event.keyCode==123) || (event.keyCode==83)))
    {
        alert('ห้ามใช้บนหน้านี้ครับ!')
        return false;  
    }
});

	$(window).on('keyup',function(event)
	{
		if(event.keyCode==44)
		{
			alert('ห้ามใช้บนหน้านี้ครับ!');
			return false;
		}
		else if ((event.shiftKey || event.ctrlKey) && event.keyCode==44)
		{
			alert('ห้ามใช้บนหน้านี้ครับ!');
			return false;
		}
	});
var isNS = (navigator.appName == "Netscape") ? 1 : 0;
	if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);
		function mischandler(){
			alert('ห้ามใช้บนหน้านี้ครับ!');
				return false;
			}
		function mousehandler(e){
			var myevent = (isNS) ? e : event;
			var eventbutton = (isNS) ? myevent.which : myevent.button;
			if((eventbutton==2)||(eventbutton==3)) return false;
			}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
function killCopy(e){
return false
}
function reEnable(){
return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
document.onmousedown=killCopy
document.onclick=reEnable
}