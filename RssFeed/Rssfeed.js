window.onload= function(){

//HOTEL	
var btnhotel = document.getElementById("hotel");
btnhotel.onclick=function() {
var xmlhttp;
if (window.XMLHttpRequest)
{
xmlhttp=new XMLHttpRequest();
}
else
{
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

/*var parent = document.getElementById("div1");
while(parent.firstChild)
{
	parent.removeChild(parent.firstChild);
}*/

xmlhttp.onreadystatechange=function()
{

if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
//document.getElementById("mytext2").innerHTML=xmlhttp.responseText;
var obj = JSON.parse(xmlhttp.responseText);
var i=0;
	//document.getElementById("mytext1").innerHTML= obj.deals[0].hotelId + "<br>" +obj.deals[0].hotelName + "<br>" +obj.deals[0].allowedCheckInDays + "<br>";
	

	var div = document.createElement("div");
	div.id= "div1";
	document.body.appendChild(div);

	while(obj.deals[i]!='undefined'){

	var element =document.createElement("div");
	if(i%2==0){
		element.style.backgroundColor="pink";
	}
	else
		element.style.backgroundColor="lightyellow";
	var divParent = document.getElementById('div1');
	divParent.appendChild(element);

	element.innerHTML = "HotelId:" + " " + obj.deals[i].hotelId + "<br>"+ " " + "HotelName:" + " " + obj.deals[i].hotelName + "<br>" +
	 "Title:" + obj.deals[i].title +"<br>" + "Description:" + " "+ obj.deals[i].description+"<br>" + "Image:" + " "+
	 
	 showImage(element,divParent,obj.deals[i].imageUrl,100,100,"image not found") + "<br>"+"<br>"; 
	i=i+1;
}
}
}

function showImage(element,divParent,src,width,height,alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width=width;
    img.height=height;
    img.alt=alt;
 	//document.getElementById("mytext1").appendChild(img);
    divParent.appendChild(img);
    divParent.style.backgroundColor=element.style.backgroundColor;
}
xmlhttp.open("GET","http://dev-mystique.tavisca.com/api/deals/all?token=wsvn4vemocpvfqoouy2434ou&&$filter=Type eq 'hotel'",true);

xmlhttp.send();
};


//CAR
var btncar= document.getElementById("car");
btncar.onclick= function() {
var xmlhttp;
if (window.XMLHttpRequest)
{
xmlhttp=new XMLHttpRequest();
}
else
{
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

/*
var parent = document.getElementById("div1");
while(parent.firstChild)
{
	parent.removeChild(parent.firstChild);
}
*/


xmlhttp.onreadystatechange=function()
{

if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
//document.getElementById("mytext2").innerHTML=xmlhttp.responseText;
var obj = JSON.parse(xmlhttp.responseText);
var i=0;
	//document.getElementById("mytext1").innerHTML= obj.deals[0].hotelId + "<br>" +obj.deals[0].hotelName + "<br>" +obj.deals[0].allowedCheckInDays + "<br>";
	



	var div = document.createElement("div");
	div.id= "div1";
	document.body.appendChild(div);

	while(obj.deals[i]!='undefined'){

	var element =document.createElement("div");
	if(i%2==0){
		element.style.backgroundColor="pink";
	}
	else
		element.style.backgroundColor="lightblue";
	var divParent = document.getElementById("div1");
	divParent.appendChild(element);
	element.innerHTML = "RentalCompanyName:" + " " + obj.deals[i].rentalCompanyName+ "<br>"+ " " + "RentalCompanyCode:" + " " + obj.deals[i].rentalCompanyCode + "<br>" +
	 "Title:" + obj.deals[i].title +"<br>" + "Description:" + " "+ obj.deals[i].description+"<br>" + "ValidityPeriod start: Date:"  +obj.deals[i].validityPeriod["start"]["date"]+"<br>" + "Time:"+obj.deals[i].validityPeriod["start"]["time"]+"<br>" +"SystemDateTime:"+obj.deals[i].validityPeriod["start"]["systemDateTime"]+"<br>" +
	 "ValidityPeriod end: Date:"+obj.deals[i].validityPeriod["end"]["date"]+"<br>" + "Time:"+obj.deals[i].validityPeriod["end"]["time"]+"<br>" +"SystemDateTime:"+obj.deals[i].validityPeriod["end"]["systemDateTime"]+"<br>"+"<br>" ;
	i=i+1;
}
}
}

xmlhttp.open("GET","http://dev-mystique.tavisca.com/api/deals/all?token=wsvn4vemocpvfqoouy2434ou&&$filter=Type eq 'car'",true);

xmlhttp.send();
};

//REFRESH
var btnRefresh = document.getElementById("refresh");
btnRefresh.onclick= function (){
    window.location.reload();
} 
}
