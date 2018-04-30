	//alert("outside Function");
	function myFunction(item) {
   // alert("inside Function");

	if(document.getElementById("data").innerHTML == "head")
	{
		parent.document.getElementById("disease1").innerHTML="";
	//alert("head");
	circle1.style.fill='#ff7d16';
	circle2.style.fill='';
	circle3.style.fill='';
	circle4.style.fill='';
	circle5.style.fill='';
	circle6.style.fill='';
	circle7.style.fill='';
	document.getElementById("disease").innerHTML='<iframe src="stomach.html" width =35%" height ="360px" style="right: -100%;border: 2px solid #57c9d5;"></iframe>'

	}
	if(document.getElementById("data").innerHTML == "shoulder")
	{
		parent.document.getElementById("disease1").innerHTML=href ="";
	//alert("shoulder");
	circle2.style.fill='#ff7d16';
	circle1.style.fill='';
	circle3.style.fill='';
	circle4.style.fill='';
	circle5.style.fill='';
	circle6.style.fill='';
	circle7.style.fill='';
		document.getElementById("disease").innerHTML='<iframe src="shoulder.html" width =35%" height ="360px" style="right: -100%;border: 2px solid #57c9d5;"></iframe>'

	}
	if(document.getElementById("data").innerHTML == "chest")
	{
		parent.document.getElementById("disease1").innerHTML=href ="";
	//alert("chest");
		circle3.style.fill='#ff7d16';
	circle1.style.fill='';
	circle2.style.fill='';
	circle4.style.fill='';
	circle5.style.fill='';
	circle6.style.fill='';
	circle7.style.fill='';
		document.getElementById("disease").innerHTML='<iframe src="chest.html" width =35%" height ="360px" style="right: -100%;border: 2px solid #57c9d5;"></iframe>'

	}
	if(document.getElementById("data").innerHTML == "stomach")
	{
		parent.document.getElementById("disease1").innerHTML=href ="";
	//alert("stomach");
		circle5.style.fill='#ff7d16';
	circle1.style.fill='';
	circle3.style.fill='';
	circle2.style.fill='';
	circle4.style.fill='';
	circle6.style.fill='';
	circle7.style.fill='';
	document.getElementById("disease").innerHTML='<iframe src="stomach.html" width =35%" height ="360px" style="right: -100%;border: 2px solid #57c9d5;"></iframe>'

	}
	if(document.getElementById("data").innerHTML == "arm")
	{
		parent.document.getElementById("disease1").innerHTML=href ="";
	//alert("arms");
		circle4.style.fill='#ff7d16';
	circle1.style.fill='';
	circle3.style.fill='';
	circle2.style.fill='';
	circle5.style.fill='';
	circle6.style.fill='';
	circle7.style.fill='';
	document.getElementById("disease").innerHTML='<iframe src="arms.html" width =35%" height ="360px" style="right: -100%;border: 2px solid #57c9d5;"></iframe>'

	}
	if(document.getElementById("data").innerHTML == "hands")
	{
		parent.document.getElementById("disease1").innerHTML=href ="";
	//alert("hands");
	circle7.style.fill='#ff7d16';
	circle1.style.fill='';
	circle3.style.fill='';
	circle4.style.fill='';
	circle5.style.fill='';
	circle6.style.fill='';
	circle2.style.fill='';
	document.getElementById("disease").innerHTML='<iframe src="hands.html" width =35%" height ="360px" style="right: -100%;border: 2px solid #57c9d5;"></iframe>'

	}
	if(document.getElementById("data").innerHTML == "legs")
	{	circle6.style.fill='#ff7d16';
	circle1.style.fill='';
	circle3.style.fill='';
	circle4.style.fill='';
	circle5.style.fill='';
	circle2.style.fill='';
	circle7.style.fill='';
		parent.document.getElementById("disease1").innerHTML=href ="";
	//alert("legs");
	document.getElementById("disease").innerHTML='<iframe src="legs.html" width =35%" height ="360px" style="right: -100%;border: 2px solid #57c9d5;"></iframe>'

	}
}
function myFunction1(x) {
//alert(x);
//alert("I am in fuction 2 ");
parent.document.getElementById("disease1").innerHTML=x;

parent.document.getElementById('iframeId1').src = parent.document.getElementById('iframeId1').src;
parent.document.getElementById('iframeId2').src = parent.document.getElementById('iframeId2').src;
parent.document.getElementById('iframeId3').src = parent.document.getElementById('iframeId3').src;
parent.document.getElementById('iframeId4').src = parent.document.getElementById('iframeId4').src;

}
function myFunction99() {
//alert(x);
//alert("I am in fuction 2 ");

parent.document.getElementById('iframeId1').src = parent.document.getElementById('iframeId1').src;
parent.document.getElementById('iframeId2').src = parent.document.getElementById('iframeId2').src;
parent.document.getElementById('iframeId3').src = parent.document.getElementById('iframeId3').src;
//parent.document.getElementById('iframeId4').src = parent.document.getElementById('iframeId4').src;

}