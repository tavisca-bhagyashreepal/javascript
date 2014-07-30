 var xmlhttp;
var clickObj=document.getElementById("buttonToShow");

function RSS(rssUrl)
{

if (window.XMLHttpRequest)
{
xmlhttp=new XMLHttpRequest();
}
else
{
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{

var s1= xmlhttp.responseText;
var obj = JSON.parse(s1);
console.log(obj);
var i=0;
while(obj != undefined || obj != null)
{
	
var hotelId =obj.deals[i].hotelId;
var hotelName = obj.deals[i].title;
var description = obj.deals[i].description;
var urlimg=obj.deals[i].imageUrl;

displayDeals(hotelName,hotelId,description,urlimg);
i++;
}

}
}
xmlhttp.open("GET",rssUrl,true);
xmlhttp.send();

}

function displayDeals (hotelName,hotelId,description,urlImage)
{
var divId = document.getElementById('Hostels');
var hotelName = hotelName;
var info =description;
var imageUrl = urlImage;
//var fare1=fare;
divId.innerHTML += templateMaker(hotelName,hotelId,info,imageUrl);
}

function templateMaker(hotelName,hotelId,information,imgUrl)
{
var template = "<div class='deals row'><div class='col-lg-6'><div class='dealsTitle'>" + hotelName + 
				"</div><div class='dealsTitle'>" + hotelId + 
				"</div><div class='info'>" + information + 
				"</div></div><div class='col-lg-6'><img class='dealsImage' src=" + imgUrl +" alt=\"Image not Loaded\"></div></div>";
return template;
}


function calculate()
{

var TestUrl = document.getElementById("Mystique").value;
RSS(TestUrl);


}

clickObj.onclick=calculate;
